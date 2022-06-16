const express = require("express");
const app = express();
const libraryData = require("./library.json");

const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/library", (req, res) => {
  res.send(libraryData);
});

app.post("/library", (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
