const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log('Usage: node calculator.mjs <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide');
    process.exit(1);
}

const [operation, num1Str, num2Str] = args;
const num1 = parseFloat(num1Str);
const num2 = parseFloat(num2Str);

if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid numbers');
    process.exit(1);
}

let result;
switch (operation) {
    case 'add':
        result = num1 + num2;
        break;
    case 'subtract':
        result = num1 - num2;
        break;
    case 'multiply':
        result = num1 * num2;
        break;
    case 'divide':
        if (num2 === 0) {
            console.log('Cannot divide by zero');
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log('Invalid operation');
        process.exit(1);
}

console.log(`Result: ${result}`);
