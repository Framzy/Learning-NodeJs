// readline is useful for reading input from the console or terminal
// we can use readline to create interactive command line applications

import readline from "readline/promises";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const main = async () => {
  const name = await input.question("Masukkan nama anda : ");
  console.info(`Hello ${name}`);
  input.close();
};

main();
