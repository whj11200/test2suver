var videoElement = document.getElementById('move');

videoElement.addEventListener('click', function() {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }

    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        videoElement.classList.add('fullscreen');
    } else {
        videoElement.classList.remove('fullscreen');
    }
});