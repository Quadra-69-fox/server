const express = require("express");
const app = require("express")();

const Controller = require("./controllers/userController");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/register", Controller.registerUser);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
