fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
        const jokes = jokeData.attachments[0].text;

        const jokeText = document.getElementById("rJokes");

        jokeText.innerHTML = jokes;
    });

chrome.runtime.onMessage.addListener(function (mesage) {
    if (mesage.message === "Content to Popup") {
        console.log(mesage.message);
    }
});
