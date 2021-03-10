function sendRequest(data) {
  console.log("result", data);
  return fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    })

    .catch(() => {
      return {
        success: false,
        error: "Se ha producido un error, por favor inténtalo más tarde",
      };
    });
}

export { sendRequest };
