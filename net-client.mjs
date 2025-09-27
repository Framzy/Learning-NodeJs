// net-client.mjs to be used with net-server.mjs so run both files with net-server.mjs as server
// run with argument like node net-client.mjs Farden or Framzy with different terminal so can connect to server

import net from "net";

const client = net.createConnection({ port: 3000, host: "localhost" });

client.on("data", (data) => {
  console.info("Received from server : " + data.toString());
});

setInterval(() => {
  client.write(`${process.argv[2]}\r\n`);
}, 2000);
