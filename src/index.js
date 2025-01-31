import "dotenv/config";

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

const users = [];

app.post("/", (req, res) => {
  res.json({
    id: 2,
    name: "test",
  });
});

app.get("/", (req, res) => {
  res.json({
    id: 1,
    name: "dito",
    users,
  });
});

app.listen(port, () => {
  console.log(`Running at http://127.0.0.1:${port}`);
});
