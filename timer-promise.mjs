// timer promise version

import timers from "timers/promises";

console.info(new Date());
const info = await timers.setTimeout(5000, "5 detik sudah berlalu");

console.info(new Date());
console.info(info);

for await (const startTime of timers.setInterval(2000)) {
  console.info("2 detik sudah berlalu " + new Date());
}
