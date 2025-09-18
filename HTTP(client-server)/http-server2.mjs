import http from "http";
import readline from "readline/promises";
import process from "process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const name = await rl.question("Masukkan nama anda : ");
  console.info(`Hello ${name}`);

  const server = http.createServer((request, response) => {
    console.info(request.method);
    console.info(request.url);
    console.info(request.headers);

    if (request.url === `/${name}`) {
      response.write(`Hello HTTP Server, PORT 3000. User ${name}`);
    } else {
      response.write("404 Not Found");
    }
    response.end();
  });

  server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000/");
  });

  rl.close();
};

main();
