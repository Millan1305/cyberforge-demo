
document.addEventListener("DOMContentLoaded", function () {
  const text = "A secure and powerful platform for authentication...";
  const typingElement = document.getElementById("typing");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // speed control
    }
  }
  typeWriter();
});

// Tabs switch
const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabs.forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Login Submit
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  console.log("Login with:", email, password);
  alert("Login clicked (implement backend)");
});

// Signup Submit
document.getElementById("signup").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  console.log("Sign up with:", name, email, password);
  alert("Sign Up clicked (implement backend)");
});

// Login Submit
document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  console.log("Login with:", email, password);
  alert("Login clicked (implement backend)");
});
