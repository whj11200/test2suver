var slides = document.querySelectorAll('.slide');
    var currentSlide = 0;

    function showSlide() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        if (currentSlide === slides.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlide();
    }

    // 이미지 슬라이드 초기화
    showSlide();

    // 버튼 클릭 이벤트 핸들러
    document.getElementById('button2').addEventListener('click', function() {
        nextSlide();
    });