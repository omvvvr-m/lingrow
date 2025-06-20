document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.mobnav');
  const navList = document.querySelector('.navlist');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');

    // Toggle icon between ☰ and ✕
    if (navList.classList.contains('open')) {
      toggleBtn.textContent = '✕'; // Cross icon when nav is open
    } else {
      toggleBtn.textContent = '☰'; // Menu icon when nav is closed
    }
  });
});

