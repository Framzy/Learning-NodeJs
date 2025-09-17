// net-server.mjs to be used with net-client.mjs so run both files with net-server.mjs as server

import net from "net";

const server = net.createServer((client) => {
  console.info("Client connected");

  client.on("data", (data) => {
    console.info("Received from client : " + data.toString());
    client.write("Hello " + data.toString());
  });
});

server.listen(3000, "localhost");
