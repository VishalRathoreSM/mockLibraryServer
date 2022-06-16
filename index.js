const express = require("express");
const app = express();
const libraryData = require("./library.json");

const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(libraryData);
});

app.post("/", (req, res) => {
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
