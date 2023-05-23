console.log("this is console from content js ");

chrome.runtime.onMessage.addListener(function (data) {
    if (data.value === 7) {
        console.log(data.message);
    }
});

chrome.runtime.sendMessage({ message: "Content to Popup" });
