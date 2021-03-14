const express = require("express");
const cors = require("cors");

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
server.use(express.json());

const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const generatedCards = [];

// server.get("/card/:id:/", (req, res) => {
//   const response = {
//     users: [{ name: "Paula" }, { name: "Jech" }],
//   };
//   res.json(response);
// });

server.post("/card/", (req, res) => {
  const newCards = generatedCards.push(usersData);

  console.log(
    `Creating the user in database with user name: ${generatedCards}`
  );

  res.json(newCards);
});
