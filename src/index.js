const express = require("express");
const cors = require("cors");
const path = require("path");
const Database = require("better-sqlite3");

const server = express();

server.use(cors());
server.use(express.json({ limit: "10mb" }));

server.set("view engine", "ejs");

const staticServerPath = "./public"; // relative to the root of the project
server.use(express.static(staticServerPath));

const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database("./src/data/cards.db", {
  // this line log in console all data base queries
  verbose: console.log,
});

server.get("/card/:id", (req, res) => {
  console.log(req.params.id);
  const query = db.prepare("SELECT * FROM cards WHERE id = ?");
  const data = query.get(req.params.id);

  console.log(data);

  res.render("/pages/card", data);
});

server.post("/card/", (req, res) => {
  // console.log(req);
  // const statement = db.prepare(
  //   "INSERT INTO cards(name, job, photo, phone, email, linkedin, github, palette) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
  // );
  // const result = statement.run(
  //   req.body.name,
  //   req.body.job,
  //   req.body.photo,
  //   req.body.phone,
  //   req.body.email,
  //   req.body.linkedin,
  //   req.body.github,
  //   req.body.palette
  // );
  const response = {};

  if (!req.body.name || req.body.name === "") {
    response.success = false;
    response.error = "Mandatory fields: name";
  } else if (!req.body.job || req.body.job.length < 2) {
    response.success = false;
    response.error = "Mandatory fields: job";
  } else if (!req.body.email || req.body.email.length < 2) {
    response.success = false;
    response.error = "Mandatory fields: email";
  } else if (!req.body.phone || req.body.phone.length < 2) {
    response.success = false;
    response.error = "Mandatory fields: phone";
  } else if (!req.body.linkedin || req.body.linkedin.length < 2) {
    response.successs = false;
    response.error = "Mandatory fields: linkedin";
  } else if (!req.body.github || req.body.github.length < 2) {
    response.success = false;
    response.error = "Mandatory fields: github";
  } else if (!(req.body.palette >= 1 && req.body.palette < 5)) {
    response.success = false;
    response.error = "Mandatory fields: palette";
  } else {
    // Insertar en la base de datos
    const statement = db.prepare(
      "INSERT INTO cards(name, job, photo, phone, email, linkedin, github, palette) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    );
    const result = statement.run(
      req.body.name,
      req.body.job,
      req.body.photo,
      req.body.phone,
      req.body.email,
      req.body.linkedin,
      req.body.github,
      req.body.palette
    );
    result.lastInsertRowid;
    // Responder que ha ido bien
    response.success = true;
    if (req.host === "localhost") {
      response.cardURL =
        "https://localhost:3000/card/" + result.lastInsertRowid;
    } else {
      response.cardURL = `https://awesome-profile-cards-madwomen.herokuapp.com/card/${result.lastInsertRowid}`;
    }
  }
  res.json(response);
});

server.get("*", (req, res) => {
  // relative to this directory
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
