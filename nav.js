// document.addEventListener("DOMContentLoaded", function () {
//   const toggleBtn = document.getElementById("toggleBtn");
//   const navList = document.querySelector(".navlist");

//   if (toggleBtn && navList) {
//     toggleBtn.addEventListener("click", function () {
//       navList.classList.toggle("open");
//     });
//   } else {
//     console.warn("Toggle button or navlist not found.");
//   }
// });

function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback(el);
  } else {
    const observer = new MutationObserver(() => {
      const el = document.querySelector(selector);
      if (el) {
        callback(el);
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}

waitForElement("#toggleBtn", function (toggleBtn) {
  const navList = document.querySelector(".navlist");

  if (!navList) {
    console.warn("Navlist not found");
    return;
  }

  toggleBtn.addEventListener("click", function () {
    navList.classList.toggle("open");
  });
});


