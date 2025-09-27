// process can use without import because it's a global variable but prefer we still import it for clarity.
// process is a built-in module in Node.js that provides information and control over the current Node.js process. one of event emitter.

import process from 'process';

process.addListener("exit", (exitCode) => {
    console.info(`NodeJS exit with code ${exitCode}`);
});

console.info(process.version );  
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

console.info("hello");

