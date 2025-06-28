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
    updateJoinButton(); // Update the button text and action
  }


  function registerUser() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("conf");

    if (passwordInput.value === confirmPasswordInput.value) {
      sessionStorage.setItem("isLoggedIn", "true");
      alert("Registration successful!");
      updateJoinButton(); // Update the button
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
  function updateJoinButton() {
    if (joinBtn) {
      console.log("Change join button");
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
    if (joinBtn) {
      console.log("Change join button");

      joinBtn.innerHTML = "Profile";
      joinBtn.removeEventListener("click", joinDefaultClick); // Avoid duplicate listeners
      joinBtn.addEventListener("click", function () {
        window.location.href = "../profile.html";
      });
    }
  }
});


