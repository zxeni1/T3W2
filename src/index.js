const inquirer = require("inquirer").default;

console.log("Dice Roller Application Starts...")

/**
 * Roll a random dice side from a variable-sided dice
 * @param {number} diceSide=6 - the total number of sides
 * @returns {number} - the side of the dice rolled
 */

function rollDice(diceSide=6) {
    let diceResult = 0;
    diceResult = Math.ceil(Math.random() * diceSide);
    return diceResult;
}

// console.log("The side you rolled is: " + rollDice());

const prompt = inquirer.createPromptModule();

prompt([
    {
        type: "number",
        name: "dice_side",
        message: "How many sided dice do you want to roll?"
    }
]).then((answer) => {
    console.log(rollDice(answer.dice_side))
});