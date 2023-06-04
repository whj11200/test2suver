var videoElement = document.getElementById("videoElement");

function playVideo() {
    videoElement.play();
}

videoElement.addEventListener("click", playVideo);