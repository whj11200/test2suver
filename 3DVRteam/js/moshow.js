var sectionElement = document.querySelector('.dddd');

window.addEventListener('scroll', function() {
    var sectionPosition = sectionElement.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight) {
        sectionElement.classList.add('show');
    } else {
        sectionElement.classList.remove('show');
    }
});