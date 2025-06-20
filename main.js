function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

function clampToZero(x) {
    return x > 0 ? x : 0;
}


// const tablet = document.querySelector('.tablet-inner');
// const anytimeText = document.querySelector('.anytime');
const tabletInner = document.querySelector('.tablet-inner');
const anytimeText = document.querySelector('.anytime');

let tabletOnView = false;
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        tabletOnView = entry.isIntersecting;
        if (!entry.isIntersecting) {
            // tablet.style.transform = 'rotateX(40deg)';
        }
    });
}, {
    threshold: 0.1
});
observer.observe(tabletInner);


// window.addEventListener('scroll', () => {
//     // if (tabletOnView) {
//     const tabletFromPageTop = tablet.getBoundingClientRect().top + window.scrollY;
//     const scrollY = window.scrollY;
//     const tabletRelativeToViewportTop = tabletFromPageTop - scrollY;


//     // console.log("Tablet from top:" + tabletFromPageTop);
//     // console.log("Scrolled:" + scrollY);
//     // console.log("Position Between tablet and viewport:" + tabletRelativeToViewportTop);


//     const rotateAmount = ((tabletRelativeToViewportTop / 27) - 5);
//     // console.log(clamp(100 - (rotateAmount - 60), 0, 300));
//     console.log(rotateAmount);

//     // tablet.style.transform = `rotateX(${clamp(100 - (rotateAmount - 60), 0, 300)}deg)`

//     tablet.style.transform = `rotateX(${clamp(rotateAmount, 0, 100)}deg)`;
//     anytimeText.style.filter = `blur(${rotateAmount}px)`
//     anytimeText.style.transform = `translateY(${clampToZero(rotateAmount * 10)}px)`;


// });


window.addEventListener('scroll', () => {
    const tabletRect = tabletInner.getBoundingClientRect();
    const tabletCenterY = tabletRect.top + (tabletRect.height / 2);
    const viewportCenterY = window.innerHeight / 2;
    const offsetFromCenter = tabletCenterY - viewportCenterY;
    const rotateAmount = clamp(offsetFromCenter / 10, -60, 60);
    const translateY = clamp(offsetFromCenter / 5, -100, 100);

    // Apply transform
    tabletInner.style.transform = `rotateX(${clampToZero(rotateAmount)}deg)`;
    anytimeText.style.transform = `translateY(${clampToZero(translateY)}px)`;
    anytimeText.style.filter = `blur(${clampToZero(rotateAmount)}px)`;
});


//////////////////////////////  carousel  /////////////////////////////////////

let current = 0 ;
const cards = document.querySelectorAll(".reviews");

function showReview(index) {
    cards.forEach((card, i) => {
        card.classList.toggle("active",i == index);
    });
}

function nextReview() {
    current = (current + 1) % cards.length;
    showReview(current);
}

function prevReview() {
    current = (current - 1 + cards.length) % cards.length;
    showReview(current);
}

setInterval(nextReview,6000);



