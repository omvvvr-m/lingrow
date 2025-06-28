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
    const screenWidth = window.innerWidth;
    const tabletRect = tabletInner.getBoundingClientRect();
    const tabletCenterY = tabletRect.top + (tabletRect.height / 2);
    const viewportCenterY = window.innerHeight / 2;
    const offsetFromCenter = tabletCenterY - viewportCenterY;
    const rotateAmount = clamp(offsetFromCenter / 10, -60, 60);
    const translateY = clamp(offsetFromCenter / 5, -100, 100);

    if (screenWidth <= 768) {
        tabletInner.style.transform = `rotateX(${clampToZero(rotateAmount)}deg)`;
    } else {
        tabletInner.style.transform = '';
    }
    anytimeText.style.transform = `translateY(${clampToZero(translateY)}px)`;
    anytimeText.style.filter = `blur(${clampToZero(rotateAmount)}px)`;
});


//Animating
const cards = document.querySelectorAll('.oc-card');
const ocElements = document.querySelector('.our-courses-elements');
const options = {
    rootMargin: "-40% 0px -40% 0px"
};
let shown = false;
const cardObserver = new IntersectionObserver((entries) => {
    if (!shown) {
        console.log('Shown!');
        entries.forEach((e) => {
            if (e.isIntersecting) {
                cards.forEach((card) => {
                    card.classList.add('dShow');
                });
                shown = true;

            }
        });
    }
}

    , options);




cardObserver.observe(ocElements);

cards.forEach((card) => {
    // cardObserver.observe(card);
    card.addEventListener('animationend', () => {
        card.style.opacity = '1';
        card.style.filter = 'blur(0)';
        card.style.transform = 'translateY(0)';
        card.classList.remove('dShow');
    });
});








