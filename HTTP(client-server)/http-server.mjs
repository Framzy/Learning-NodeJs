import http from "http";

const server = http.createServer((request, response) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method === "POST") {
    request.on("data", (data) => {
      response.setHeader("Content-Type", "application/json");
      response.write(data);
      response.write("\nResponse from HTTP Server");
      response.end();
    });
  } else {
    response.write("404 Not Found");
    response.end();
  }
});

server.listen(4000, "localhost", () => {
  console.log("Server running at http://localhost:4000/");
});
