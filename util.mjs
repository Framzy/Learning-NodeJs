import util from "util";

const firstName = "Farden";
const lastName = "Ramzy";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Farden",
  lastName: "Ramzy",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
