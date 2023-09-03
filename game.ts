#! /user/bin/env node


import inquirer from "inquirer";

async function startFunc() {

    const systemNum = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt({
        name: "userGuess",
        type: "number",
        message: "Please Enter Number b/w 1 - 10:"
    })

    const { userGuess } = userNum;
    console.log("your guess ", userGuess, "\nsystem's Guesss", systemNum);

    if (userGuess === systemNum) {
        console.log("congratulation u guessed the right number \nYou Won")
    }
    else {
        console.log("better luck next time");
    }
}

async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "do you wany to play again? press Y or N"
        })
    }
    while (again.restart == "Y" || again.restart == "y" || again.restart == "yes" || again.restart == "YES")
}

startAgain();

