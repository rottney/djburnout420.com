const tracklist = [
    "all my friends live in Brooklyn :'(",
    "Fergie - Glamorous (DJ BURNOUT Remix)",
    "molly percocet",
    "trippin balls in the wegmans parking lot",
];

let pos = 0;

function loadTrack() {
    const albumArt = document.getElementById("albumArt");
    albumArt.setAttribute("src", getArtworkPath());

    const currentTrack = document.getElementById("currentTrack");
    currentTrack.setAttribute("src", getAudioPath());

    const audioPlayer = document.getElementById("audioPlayer");
    const audioPlayerHtml = audioPlayer.outerHTML;
    audioPlayer.outerHTML = audioPlayerHtml;

    const trackName = document.getElementById("trackName");
    trackName.innerHTML = getTitle();

    renderButtons(pos);
}

function renderButtons(pos) {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.removeAttribute("disabled");
    nextButton.removeAttribute("disabled");

    if (pos == 0) {
        prevButton.setAttribute("disabled", true);
    }
    else if (pos == tracklist.length - 1) {
        nextButton.setAttribute("disabled", true);
    }
}

function prev() {
    if (pos !== 0) {
        pos--;
    }

    loadTrack();
}

function next() {
    if (pos !== tracklist.length - 1) {
        pos++;
    }

    loadTrack();
}

function getArtworkPath() {
    return "images/".concat(tracklist[pos], ".jpg");
}

function getAudioPath() {
    return "music/".concat(tracklist[pos], ".mp3");
}

function getTitle() {
    return tracklist[pos];
}
