const express = require("express");
const cors = require("cors");

// hacer aquí la petición de los datos del array de usuario obtenidos.

// SERVER

// config server
const server = express();

server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
const staticServerpath = "./public";
server.use(express.static(staticServerpath));

// API
server.get("/api/products", (req, res) => {
  // Cojo los productos y los devuelvo
  // res.json(productsData);
});

server.post("/api/user/login", (req, res) => {
  // Cojo los datos que recibo desde el navegador que están en req.body.email y req.body.password
  // Con estos datos busco en el array de usuarios si el usuario existe
  // const userFound = usersData.find((user) => {
  //   return user.email === req.body.email && user.password === req.body.password;
  // });
  // if (userFound !== undefined) {
  //   // Si el usuario existe devuelvo el id del usuario
  //   res.json({
  //     error: false,
  //     userId: userFound.id,
  //   });
  // } else {
  //   // Si el usuario no existe devuelvo un error
  //   res.status(404).json({
  //     error: "user-not-found",
  //     message: "User not found",
  //   });
  // }
});
