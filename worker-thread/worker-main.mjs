import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker-thread/worker.mjs");
const worker2 = new Worker("./worker-thread/worker.mjs");

worker1.on("message", (message) => {
  console.info(`thread-${threadId} receive message : ${message}`);
});

worker2.on("message", (message) => {
  console.info(`thread-${threadId} receive message : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
