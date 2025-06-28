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
      joinWindow.style.display = "flex";
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
  const joinBtn = document.querySelector(".loginbtn");

  console.log(joinForm);

  const alreadyMemberLink = document.querySelector(".alreadymember a");
  console.log(alreadyMemberLink);

  const notMemberLink = document.querySelector(".notamember a");


  const joinWindow = document.querySelector(".join");
  const homeWindow = document.querySelector(".home");

  console.log(joinBtn);



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

  document.querySelector(".exit").addEventListener("click", function () {
    document.querySelector(".join").style.display = "none";
  });
  function loginUser() {
    sessionStorage.setItem("isLoggedIn", "true");
    alert("Welcome!");
    location.reload();
  }


  function registerUser() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("conf");

    if (passwordInput.value === confirmPasswordInput.value) {
      sessionStorage.setItem("isLoggedIn", "true");
      alert("Registration successful!");
      // updateJoinButton(); // Update the button
      location.reload();
    } else {
      alert("Password does not match.");
    }
  }


  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();
    registerUser();

  });

  signForm.addEventListener("submit", function (e) {
    e.preventDefault();
    loginUser();
  });

  // Function to change Join to Profile
  // function updateJoinButton() {
  //   if (joinBtn) {
  //     joinBtn.textContent = "Profile";
  //     joinBtn.removeEventListener("click", joinDefaultClick); // Avoid duplicate listeners
  //     joinBtn.addEventListener("click", function () {
  //       window.location.href = "profile.html";
  //     });
  //   }
  // }

  function joinDefaultClick() {

  }

  if (sessionStorage.getItem("isLoggedIn") === "true") {
    if (joinBtn) {
      console.log("Change join button");

      joinBtn.innerHTML = "Profile";
      joinBtn.removeEventListener("click", joinDefaultClick); // Avoid duplicate listeners
      joinBtn.addEventListener("click", function () {
        window.location.href = "../profile/profile.html";
      });
    }
  }
});


