// using fs/promises because we want to use promise not callback to avoid callback hell

import fs from "fs/promises";

const buffer = await fs.readFile("hello-world.js");

console.info(buffer.toString());

await fs.writeFile("tryWriteFile.txt", "Success Write File");

await fs.rename("tryWriteFile.txt", "tryRenameFile.txt");