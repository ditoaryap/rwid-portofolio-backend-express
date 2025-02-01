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
  users.push(req.body);

  res.json({
    user: req.body,
  });
});

app.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  console.log(typeof id, typeof user.id);

  res.json({
    users: user,
  });
});

app.listen(port, () => {
  console.log(`Running at http://127.0.0.1:${port}`);
});
