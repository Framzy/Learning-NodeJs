// Encoding is the process of converting data
// from one form to another so that it can be stored, transmitted, or read correctly

const buffer = Buffer.from("Farden Ramzy", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("RmFyZGVuIFJhbXp5", "base64");
console.info("Hasil encoding ke utf8 : " + bufferBase64.toString("utf8"));
