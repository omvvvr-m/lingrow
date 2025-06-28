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

waitForElement("#loginbtn", function (loginBtn) {
  loginBtn.addEventListener("click", function () {
    const joinWindow = document.querySelector(".join");
    if (joinWindow) {
      joinWindow.style.display = "block";
    }
  });
});


// /////////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const homeLink = document.querySelector('.navlist li:first-child > a');
//   const dropdown = document.querySelector('.dropdown');

//   homeLink.addEventListener("click", function (e) {
//     if (window.innerWidth <= 768) {
//       e.preventDefault();
//       dropdown.classList.toggle("open");
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".navlist > li");

  navItems.forEach((item) => {
    const link = item.querySelector("a.has-dropdown");
    const dropdown = item.querySelector(".dropdown");

    if (link && dropdown) {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();

          // قفل أي قائمة تانية مفتوحة
          document.querySelectorAll(".dropdown.open").forEach((openDropdown) => {
            if (openDropdown !== dropdown) {
              openDropdown.classList.remove("open");
            }
          });

          dropdown.classList.toggle("open");
        }
      });
    }
  });

  // إغلاق القائمة عند الضغط خارجها
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 768 &&
      !e.target.closest(".navlist li")
    ) {
      document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
        dropdown.classList.remove("open");
      });
    }
  });
});


/* ================= section divider=======================*/


document.addEventListener("DOMContentLoaded", function () {


  const joinForm = document.querySelector(".joinForm");
  const signForm = document.querySelector(".signinForm");
  const joinBtn = document.getElementById("joinBtn");

  const alreadyMemberLink = document.querySelector(".alreadymember a");
  const notMemberLink = document.querySelector(".notamember a");
  // hna tl3t amember m4 member bs :|
  // w kman zwdna a 3l4qn homa mktobeen gwa <a></a>

  const joinWindow = document.querySelector(".join");
  const homeWindow = document.querySelector(".home");

  alreadyMemberLink.addEventListener("click", (e) => {
    e.preventDefault();
    joinForm.style.display = "none";
    signForm.style.display = "flex";
  });

  notMemberLink.addEventListener("click", (e) => {
    e.preventDefault();
    signForm.style.display = "none";
    joinForm.style.display = "flex";
  });

  function loginUser() {

    sessionStorage.setItem("isLoggedIn", "true");
    alert(`Welcome!`);
    location.reload();

  }

  function registerUser() {

    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("conf");

    if (passwordInput.value === confirmPasswordInput.value) {
      sessionStorage.setItem("isLoggedIn", "true");
      location.reload();
    } else {
      alert(`Password does not match.`);
    }
  }


  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loginUser();
  });

  signForm.addEventListener("submit", function (e) {
    e.preventDefault();
    registerUser();
  });


  if (sessionStorage.getItem("isLoggedIn") === "true") {
    if (joinBtn) {
      joinBtn.textContent = "Profile";
      joinBtn.addEventListener("click", () => {
        window.location.href = "profile.html";
      });
    }
  }
});
