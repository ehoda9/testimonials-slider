const testmonial = Array.from(document.querySelectorAll('.testmonial'));
const prev = Array.from(document.querySelectorAll('.prev'));
const next = Array.from(document.querySelectorAll('.next'));
let slidesCount = testmonial.length;
let currentSlide = 1;
window.addEventListener("keydown", controll);
prev.forEach(e => e.onclick = prevClick);
next.forEach(e => e.onclick = nextClick);
function prevClick() {
    if (!prev[currentSlide - 1].classList.contains('disabled')) {
        currentSlide--;
        testmonial[currentSlide - 1].style.animation = 'showPrev 0.5s alternate';
        checker();
    }

}
function nextClick() {
    if (!next[currentSlide - 1].classList.contains('disabled')) {
        currentSlide++;
        testmonial[currentSlide - 1].style.animation = 'showNext 0.5s alternate';
        checker();
    }

}
function controll(event) {
    if (event.keyCode === 37) {
        if (!prev[currentSlide - 1].classList.contains('disabled')) {
            currentSlide--;
            testmonial[currentSlide - 1].style.animation = 'showPrev 0.5s alternate';
            checker();
        }
    }
    if (event.keyCode === 39) {
        if (!next[currentSlide - 1].classList.contains('disabled')) {
            currentSlide++;
            testmonial[currentSlide - 1].style.animation = 'showNext 0.5s alternate';
            checker();
        }
    }
}
checker()
function checker() {
    testmonial.forEach(s => s.classList.remove('active'));
    testmonial[currentSlide - 1].classList.add('active');
    if (currentSlide == 1) {
        prev[currentSlide - 1].classList.add('disabled');
    } else {
        prev[currentSlide - 1].classList.remove('disabled');
    }
    if (currentSlide == slidesCount) {
        next[currentSlide - 1].classList.add('disabled');
    } else {
        next[currentSlide - 1].classList.remove('disabled');
    }
}