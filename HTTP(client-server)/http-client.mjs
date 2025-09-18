import https from "https";

const url = "https://eo8fju195bphvy5.m.pipedream.net";
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.on("data", (data) => {
      console.info(`Recieve data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstNamae: "Farden",
  lastName: "Ramzy",
});

request.write(body);
request.end();
