const prompt = require('prompt-sync')();

function fizzbuzz(endValue) {
    const mapPrefixDiv = new Map([
        ["Fizz", 3],
        ["Buzz", 5],
        ["Bang", 7],
        ["Fezz", 13],
    ]);

    const order = ["Fizz", "Buzz", "Bang"];
    const reversedOrder = [...order].reverse();

    let indexB, indexFezz, strings, printOrder, message;

    for (let number = 1; number <= endValue; number++) {
        strings = new Map();
        mapPrefixDiv.forEach((div, prefix) => strings.set(prefix, (number % div === 0) ? prefix : ""));

        if (number % 11 === 0) {
            console.log("Bong");
            continue;
        }

        let hasPrefix = Array.from(strings.values()).some((value) => value);
        if (!hasPrefix) {
            console.log(number);
            continue;
        }

        printOrder = (number % 17 === 0) ? reversedOrder : order;
        message = printOrder.map((prefix) => strings.get(prefix)).join("");

        // insert "Fezz" at the right index
        indexB = message.indexOf("B");
        indexFezz = indexB === -1 ? message.length : indexB;
        message = message.substring(0, indexFezz) + strings.get("Fezz") + message.substring(indexFezz);

        console.log(message);
    }
}

function getEndValue() {
    return parseInt(prompt("Please enter a maximum value: ")) || 100;
}

function main() {
    let endValue = getEndValue();
    fizzbuzz(endValue);
}

main();


