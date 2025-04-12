const express = require("express");
const main = express();
const users = reqire("./routers/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");

const sessionOptions = {
  secret: "secretsuper",
  resave: false,
  saveUninitialized: true,
};

main.use(session(sessionOptions));

main.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  console.log(req.session);
  res.send(name);
});
