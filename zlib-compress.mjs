// zlib for compression data and decompression data not encrypted data
// zlib is lossless data compression so no data lost during compression and decompression

import fs from "fs";
import zlib from "zlib";

const source = fs.readFileSync("zlib-compress.mjs");
const result = zlib.gzipSync(source);
console.info(result);

fs.writeFileSync("zlib-compress.mjs.gz", result);
