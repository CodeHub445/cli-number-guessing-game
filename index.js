#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcome to codehub with moiz - CLT number guessing Game\n");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "Enter your guess number (Number List frome 1 to 5);",
    },
]);
if (answer.userGuessingNumber === randomnumber) {
    console.log("congratulation ! you guess a correct number,");
}
else {
    console.log("sorry you gusse a wrong number");
}
