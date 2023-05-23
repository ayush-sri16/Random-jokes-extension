console.log("this is console for background js ");

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message === "Popup to backGround") {
    console.log(request.message);
  }
});