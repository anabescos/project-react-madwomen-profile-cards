const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const usersData = [
  {
    palette: 1,
    name: "Ana B",
    job: "front-end developer",
    email: "a@gmail.com",
    phone: "666555444",
    linkedin: "anab",
    github: "anab",
    photo: "image",
  },
];

const server = express();

server.use(cors());
server.use(express.json({ limit: "10mb" }));
//server.use(express.json());

server.set("view engine", "ejs");

const serverPort = process.env.PORT || 3010;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
// const db = new Database("./src/data/cards.db", {
//   // this line log in console all data base queries
//   verbose: console.log,
// });

const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

const generatedCards = [];
server.post("/card/", (req, res) => {
  if (!req.body.name || req.body.name === "") {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: name",
    });
  } else if (!req.body.job || req.body.job.length < 2) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: job",
    });
  } else if (!req.body.email || req.body.email.length < 2) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: email",
    });
  } else if (!req.body.phone || req.body.phone.length < 2) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: phone",
    });
  } else if (!req.body.linkedin || req.body.linkedin.length < 2) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: linkedin",
    });
  } else if (!req.body.github || req.body.github.length < 2) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: github",
    });
  } else if (!(req.body.palette >= 1 && req.body.palette < 5)) {
    res.status(404)({
      succes: false,
      error: "Mandatory fields: palette",
    });
  } else {
    // Insertar en la base de datos
    generatedCards.push({ card: req.body });
    // Responder que ha ido bien
    res.status(200).json({ result: "ok" });
  }
  res.json([usersData]);
});

server.get("/card/:id", (req, res) => {
  const data = {
    palette: 1,
    name: "Ana B",
    job: "front-end developer",
    email: "a@gmail.com",
    phone: "666555444",
    linkedin: "anab",
    github: "anab",
    photo: "image",
  };

  res.render("pages/card", data);
});
