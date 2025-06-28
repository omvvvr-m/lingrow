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

/* ================= section divider=======================*/


document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.querySelector(".joinForm");
  const signForm = document.querySelector(".signinForm");
  const joinBtn = document.getElementById("joinBtn");

  const alreadyMemberLink = document.querySelector(".alreadymember a");
  const notMemberLink = document.querySelector(".notamember a");

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
    alert("Welcome!");
    updateJoinButton(); // Update the button text and action
  }


  function registerUser() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("conf");

    if (passwordInput.value === confirmPasswordInput.value) {
      sessionStorage.setItem("isLoggedIn", "true");
      alert("Registration successful!");
      updateJoinButton(); // Update the button
    } else {
      alert("Password does not match.");
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

  // Function to change Join to Profile
  function updateJoinButton() {
    if (joinBtn) {
      joinBtn.textContent = "Profile";
      joinBtn.removeEventListener("click", joinDefaultClick); // Avoid duplicate listeners
      joinBtn.addEventListener("click", function () {
        window.location.href = "profile.html";
      });
    }
  }



  function joinDefaultClick() {
    
  }
  if (sessionStorage.getItem("isLoggedIn") === "true") {
    updateJoinButton();
  }
});


