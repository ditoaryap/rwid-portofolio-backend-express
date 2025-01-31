import "dotenv/config";

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = [];

app.get("/user", (req, res) => {
  res.json({
    users: users,
  });
});

app.post("/user", (req, res) => {
  const userInput = req.body;

  users.push(userInput);

  res.json({
    user: userInput,
  });
});

app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "dito",
    users,
  });
});

app.get("/user/:id", (req, res) => {
  const id = req.id;
  res.json({
    id: id,
    name: "dito",
  });
});

app.listen(port, () => {
  console.log(`Running at http://127.0.0.1:${port}`);
});
