// stream to manipulate file content using read and write streams

import fs from "fs";

const writter = fs.createWriteStream("streamOut.log");

writter.write("Farden\n");
writter.write("Ramzy");
writter.end();

const reader = fs.createReadStream("streamOut.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
