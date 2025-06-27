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



/* ================= section divider=======================*/


document.addEventListener("DOMContentLoaded", function () {
  const joinForm = document.querySelector(".joinForm");
  const signForm = document.querySelector(".signinForm");

  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confInput = document.getElementById("conf");
  const phoneInput = document.getElementById("phone");

  const signEmailInput = document.getElementById("signinEmail");
  const signPasswordInput = document.getElementById("signinPassword");

  const alreadyMemberLink = document.querySelector(".alreadymember a");
  const notMemberLink = document.querySelector(".notamember a");
  // hna tl3t amember m4 member bs :|
  // w kman zwdna a 3l4qn homa mktobeen gwa <a></a>

  const joinWindow = document.querySelector(".join");
  const homeWindow = document.querySelector(".home");
  const logoutBtn = document.getElementById("logoutBtn");

  alreadyMemberLink.addEventListener("click", (e) => {
    e.preventDefault();
    joinForm.style.display = "none";
    signForm.style.display = "block";
  });

  notMemberLink.addEventListener("click", (e) => {
    e.preventDefault();
    signForm.style.display = "none";
    joinForm.style.display = "block";
  });

  function registerUser(firstName, lastName, email, password, phone) {
    if (localStorage.getItem(email)) {
      alert("Email already exists!");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone
    };

    localStorage.setItem(email, JSON.stringify(userData));
    alert("Registration successful! You can now log in.");
    joinForm.reset();
    joinForm.style.display = "none";
    signForm.style.display = "block";
  }

  function loginUser(email, password) {
    const user = localStorage.getItem(email);
    if (!user) {
      alert("Email not found!");
      return;
    }

    const userData = JSON.parse(user);
    if (userData.password !== password) {
      alert("Incorrect password!");
      return;
    }

    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("currentUser", email);
    sessionStorage.setItem("currentUserFname", userData.firstName);

    alert(`Welcome, ${userData.firstName}`);
    signForm.reset();

    joinWindow.style.display = "none";
    homeWindow.style.display = "block";
    // hna 5lnaha window 3l4an n4eel L window kolh m4 L form bs

  }

  joinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confInput.value;
    const phone = phoneInput.value.trim();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    registerUser(firstName, lastName, email, password, phone);
  });

  signForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = signEmailInput.value.trim();
    const password = signPasswordInput.value;

    loginUser(email, password);
  });


  if (sessionStorage.getItem("isLoggedIn") === "true") {
    joinWindow.style.display = "none";
    homeWindow.style.display = "block";
    // hna 5lnaha window 3l4an n4eel L window kolh m4 L form bs
  } else {
    signForm.style.display = "none";
    joinForm.style.display = "block";
  }
});
