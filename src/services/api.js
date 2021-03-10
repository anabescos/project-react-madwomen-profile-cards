function api(data) {
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
    .catch((error) => console.error("Error:", error));

}

export default api;
