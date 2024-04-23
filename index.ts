import inquirer from "inquirer";

//1) computer will generate a andom number
//2) user input for guessing number
//3) compare user input with computer generated numberr and show result

const randomNumber = Math.floor(Math.random()* 10 + 1);


const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 - 10:",
    }
]);

if (answer.userGuessedNumber === randomNumber){
console.log("you guessed the right number.");
} else {
    console.log("you guessed wrong number");
}