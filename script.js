// Anti-debugging
document.addEventListener("keydown", function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
});

(function() {
  const detect = new Image();
  Object.defineProperty(detect, 'id', {
    get: function () {
      document.body.innerHTML = 'Cheating detected. Bye!';
      throw new Error("DevTools detected");
    }
  });
  setInterval(() => console.dir(detect), 1000);
})();

// Get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Base64 Encoded Default Stream URL
const encodedUrl = "aHR0cHM6Ly9jcmljaGQub25saW5ldHZiZC5jb20vc3RyZWFtLnBocD9pZD0yNjgmc3J2PTEmZm9ybWF0PS5tM3U4JnZ0b2tlbj1iMDkxOTU4NDMyMjg5ZmZmMzE4ODczOGRhYzY4MWU1YWM3YzRjNGQ2MWM4ZGJkN2M5YTBkMjQ5OGE0NDc0ZmFjLTE3NDUyNTM5MzE=
  ";

// Decode the Base64-encoded URL, or use the `file` query parameter if available
const streamUrl = getQueryParam("file") || atob(encodedUrl);

// Check if URL is decoded properly
if (streamUrl && streamUrl.startsWith("http")) {
  // JWPlayer setup
  jwplayer("jwplayerDiv").setup({
    file: streamUrl,
    width: "100%",
    height: "100%",
    aspectratio: "16:9",
    autostart: true,
    mute: false,
    preload: "auto",
    cast: { appid: "CC1AD845" }
  });
} else {
  // If URL decoding fails, show an error
  document.body.innerHTML = "Invalid stream URL.";
}
