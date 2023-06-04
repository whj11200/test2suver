function scrollToTop(){
    window.scrollTo({top: 0, behavior:'smooth'});
}   
const button = document.querySelector('#scroll-to-top-button');
button.addEventListener('click', scrollToTop);