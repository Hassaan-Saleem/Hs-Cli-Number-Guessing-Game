#! /usr/bin/env node
import inquirer from 'inquirer';
console.log("Guess a Number from 1-20");
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answers = await inquirer.prompt([
    {
        name: 'userguessednumber',
        type: 'number',
        message: 'Please Guess a Number',
    },
]);
if (answers.userguessednumber === randomNumber) {
    console.log("Congrats! You Guessed it right.");
}
else if (answers.userguessednumber > 20) {
    console.log("Please select a number from 1-20");
}
else {
    console.log("Wrong Guess! Please try again.");
}
if (answers.userguessednumber <= 20) {
    console.log("The Right answer was " + randomNumber);
}
