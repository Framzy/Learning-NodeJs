// buffer is global variavble in Node.js
// buffer is temporary storage for binary data in ram memory

const buf = Buffer.from("Farden");
console.info(buf);
console.info(buf.toString());

buf.reverse();
console.info(buf.toString());
