
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.mobnav');
  const navList = document.querySelector('.navlist');

  toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
  });
});
