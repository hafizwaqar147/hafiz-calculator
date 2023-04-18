#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { sum, subtract, multiply, divide, modulus } from "./calc3_exp.js";
const calc = async () => {
    console.log(chalk.red(chalk.bgGreen(figlet.textSync("calculator\n hafiz\n waqar", {
        font: "Doom",
        width: 60,
        horizontalLayout: "default",
        whitespaceBreak: true,
    }))));
    const input = await inquirer.prompt([
        {
            name: "value_1",
            type: "number",
            message: "Enter Your First Value"
        }, {
            name: "value_2",
            type: "number",
            message: "Enter Your Second Value",
        }, {
            name: "operator",
            type: "list",
            message: "Select the Operator",
            choices: ["sum", "subtract", "multiply", "divide", "modulus"],
        }
    ]);
    if (input.operator === "sum") {
        const result = sum(input.value_1, input.value_2);
        console.log(`${input.value_1} ${input.operator} ${input.value_2} = ${result}`);
    }
    else if (input.operator === "subtract") {
        const result = subtract(input.value_1, input.value_2);
        console.log(`${input.value_1} ${input.operator} ${input.value_2} = ${result}`);
    }
    else if (input.operator === "multiply") {
        const result = multiply(input.value_1, input.value_2);
        console.log(`${input.value_1} ${input.operator} ${input.value_2} = ${result}`);
    }
    else if (input.operator === "divide") {
        const result = divide(input.value_1, input.value_2);
        console.log(`${input.value_1} ${input.operator} ${input.value_2} = ${result}`);
    }
    else if (input.operator === "modulus") {
        const result = modulus(input.value_1, input.value_2);
        console.log(`${input.value_1} ${input.operator} ${input.value_2} = ${result}`);
    }
    else {
        console.log(`Invalid Operation`);
    }
};
await calc();
