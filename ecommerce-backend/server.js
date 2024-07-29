// const express = require("express");
// const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const { User } = require("./models"); // Import the User model
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(cors());

// // Sign up endpoint
// app.post("/api/signup", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({ email, password: hashedPassword });
//     res.status(201).send("User registered");
//   } catch (err) {
//     if (err.name === "SequelizeUniqueConstraintError") {
//       res.status(400).send("Email already exists");
//     } else {
//       res.status(500).send("Error registering user");
//     }
//   }
// });

// // Login endpoint
// app.post("/api/login", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = await User.findOne({ where: { email: username } });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       const token = jwt.sign({ username: user.email }, "secret_key", {
//         expiresIn: "1h",
//       });
//       res.json({ token });
//     } else {
//       res.status(401).send("Invalid credentials");
//     }
//   } catch (err) {
//     res.status(500).send("Error logging in user");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { User, sequelize } = require("./models/user"); // Adjust path as needed

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// // Sync database
// sequelize
//   .sync()
//   .then(() => console.log("Database synced"))
//   .catch((err) => console.log("Error syncing database:", err));

// Sign up endpoint
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword });
    res.status(201).send("User registered");
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(400).send("Email already exists");
    } else {
      res.status(500).send("Error registering user");
    }
  }
});

// Login endpoint
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
