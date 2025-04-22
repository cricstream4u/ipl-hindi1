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

(function () {
  const detect = new Image();
  Object.defineProperty(detect, 'id', {
    get: function () {
      document.body.innerHTML = 'Dont Cheat Otherwise I will Fuck You!';
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

// Default HLS Stream URL (Plain Text)
const defaultStreamUrl = "";

// Use query parameter if provided, otherwise use default
const streamUrl = getQueryParam("file") || defaultStreamUrl;

// Check if URL is valid
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
  document.body.innerHTML = "Invalid stream URL.";
}
