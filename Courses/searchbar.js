const searchInput = document.querySelector("[data-search]");
const courses = Array.from(document.querySelectorAll(".card"));

const courseData = courses.map(card => ({
    element: card,
    title: card.querySelector(".card-title").textContent.trim()
}));
const fuseC = new Fuse(courseData, {
    keys: ['title']
});

const searchIcon = document.getElementById('searchBut');
function handleSearch(e) {
    const query = searchInput.value.trim();
    let result = fuseC.search(query);
    console.log(result[0]);
    let match = result[0]?.item;
    if (match) {
        let searching = true;
        courses.forEach(e => {

            e.classList.add("searching");
        });


        lenis.scrollTo(match.element, {
            offset: -(window.innerHeight / 2) + (match.element.offsetHeight / 2),
            duration: 1
        });
        setTimeout(() => {
            match.element.classList.add("found")
            setTimeout(() => {
                searching = false;
                match.element.classList.remove("found")
                courses.forEach(e => {

                    e.classList.remove("searching");
                });
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
}

searchIcon.addEventListener('click', function (e) {
    handleSearch(e);
});

searchInput.addEventListener("search", e => {
    console.log("Start searching");
    handleSearch(e);
});
