document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");

  if (form && usernameField && passwordField) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = usernameField.value;
      const password = passwordField.value;

      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert("Login successful!");
        window.location.href = "/index.html";
      } else {
        alert("Login failed.");
      }
    });
  } else {
    console.error("Form or input fields not found.");
  }
  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: username } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ username: user.email }, "secret_key", {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).send("Invalid credentials");
      }
    } catch (err) {
      res.status(500).send("Error logging in user");
    }
  });
});
