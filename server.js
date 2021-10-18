const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json())

app.use("/main.js", express.static(path.join(__dirname, "/public/main.js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

let students = [];
app.post("/api/add-student", (req, res) => {
//   const { name } = req.body;
  // const name = req.body.name
  console.log(req.body);
});

app.listen(port, () => console.log(`run it on ${port}`));
