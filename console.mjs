// we can use console import to write log to the console

import { Console } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("console.log");

const log = new Console({
  stdout: logFile,
  stderr: logFile,
});

log.info("Hello Console");
log.error("Ups");
