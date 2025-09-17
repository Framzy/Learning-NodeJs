import { URL } from "url";

const pzn = new URL(
  "https://kelas.programmerzamannow.com/belajar?kelas=NodeJS"
);

// can manipulate URL object
pzn.protocol = "http:";
pzn.host = "www.Farden.com";
pzn.searchParams.append("status", "plus");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
