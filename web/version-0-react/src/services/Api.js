const isDevEnviroment = process.env.NODE_ENV === "development"; // Booleano
const apiUrl = isDevEnviroment
  ? "http://localhost:3000/card"
  : "https://awesome-profile-cards-madwomen.herokuapp.com/card";

function api(data) {
  console.log(apiUrl);
  return fetch("http://localhost:3000/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {
        success: false,
        error: "Se ha producido un error. Inténtelo más tarde",
      };
    });
}
export default api;
