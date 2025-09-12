import os from "os";

console.info("platform = " + os.platform());
console.info("arsitektur = " + os.arch());
console.table(os.cpus());
console.info("uptime = " + os.uptime())
console.info("total memory = " + os.totalmem());
console.info("free memory = " + os.freemem());
console.info("home direktori = " + os.homedir());
console.info("host name = " + os.hostname());
console.table(os.networkInterfaces());