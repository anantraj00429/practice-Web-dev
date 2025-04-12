import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is good");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "What do you call a bear with no teeth?",
      content: "this is joke",
    },

    {
      id: 2,
      title: "What do you call a bear with no teeth?",
      content: "this is second joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server app listening on port ${port}!`);
});
