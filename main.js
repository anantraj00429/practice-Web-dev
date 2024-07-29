import "./style.css";
import "./product.css";
import products from "./api/products.json";
import manyproduct from "./api/manyproduct.json";
import { showProductContainer } from "./homeProductCards";
import { showProductContain } from "./manyProduct";

function showLoginPage() {
  window.location.href = "logIn.html";
}

function showHomePage() {
  window.location.href = "index.html";
}

// Function to attach event listeners
function attachEventListeners() {
  const signUpButton = document.querySelector(
    ".sing_in_up a[href='signUp.html']"
  );
  const logInButton = document.querySelector(
    ".sing_in_up a[href='logIn.html']"
  );

  if (signUpButton) {
    signUpButton.addEventListener("click", showLoginPage);
  } else {
    console.error("Sign Up button not found.");
  }

  if (logInButton) {
    logInButton.addEventListener("click", showHomePage);
  } else {
    console.error("Log In button not found.");
  }
}

// Check if the user is logged in when the page loads
window.addEventListener("DOMContentLoaded", function () {
  attachEventListeners();

  // Display products on the home page
  console.log(products);
  console.log(manyproduct);

  showProductContainer(products);
  showProductContain(manyproduct);
});

// Sign up form submission
document
  .getElementById("signup-form")
  ?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email);
    console.log(password);

    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Sign up successful!");
      window.location.href = "/login.html";
    } else {
      alert("Sign up failed.");
    }
  });
