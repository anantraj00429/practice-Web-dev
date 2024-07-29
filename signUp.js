// frontend/signUp.js
document.getElementById("signup-form").addEventListener("submit", async (e) => {
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
    window.location.href = "/logIn.html";
  } else {
    alert("Sign up failed.");
  }
});
