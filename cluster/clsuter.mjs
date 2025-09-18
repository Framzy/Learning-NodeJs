// cluster is used to create child processes that share the same server port
// This is useful for taking advantage of multi-core systems
// Each child process has its own event loop and memory space

import cluster from "cluster";
import os from "os";
import process from "process";
import http from "http";

if (cluster.isPrimary) {
  // runnign on primary thread
  console.info(`Primary ${process.pid} is running`);

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.info(`Worker ${worker.id} is exited`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  // running on worker thread
  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}\n`);
    response.end();
    process.exit(0);
  });

  server.listen(3000, "localhost", () => {
    console.log(`Server running at http://localhost:3000/`);
  });
  console.info(`Worker ${process.pid} started`);
}
