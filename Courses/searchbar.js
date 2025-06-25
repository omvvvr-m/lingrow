const searchInput = document.querySelector("[data-search]");

const courses = Array.from(document.querySelectorAll(".card"));



const courseData = courses.map(card => ({
    element: card,
    title: card.querySelector(".card-title").textContent.trim()
}));
const fuseC = new Fuse(courseData, {
    keys: ['title']
});
searchInput.addEventListener("search", e => {
    let result = fuseC.search(e.target.value);
    console.log(result[0]);
    let match = result[0]?.item;
    e.preventDefault();

    if (match) {
        lenis.scrollTo(match.element, {
            offset: -(window.innerHeight / 2) + (match.element.offsetHeight / 2),
            duration: 1

        });
        setTimeout(() => {
            match.element.classList.add("found")
            setTimeout(() => {
                match.element.classList.remove("found")

            }, 800);
        }, 500);
    } else if (searchInput.value != "") {
        const searchbarcircle = document.querySelector('.search-bar-circle');
        searchbarcircle.classList.add("wrong")
        searchInput.value = "";
        setTimeout(() => {
            searchbarcircle.classList.remove("wrong")
        }, 400);
    }

});
searchInput.addEventListener('')