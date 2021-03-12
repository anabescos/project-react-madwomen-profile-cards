const express = require("express");
const cors = require("cors");
// hacer aquí la petición de los datos del array de usuario obtenidos.
const server = express();

server.use(cors());
server.use(express.json());

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
const staticServerpath = "./public";
server.use(express.static(staticServerpath));

server.get("/users", (req, res) => {
  const response = {
    users: [{ name: "Sofía" }, { name: "María" }],
  };
  res.json(response);
});

server.post("/new-user", (req, res) => {
  const response = {
    result: `user created: ${req.body.userName}`,
  };
  res.json(response);
});
