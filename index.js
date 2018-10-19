//console.log ("Hello!")
let Word = require("./word.js");
let inquire = require("inquirer");
/// npm i boxen use this for correct answers
const boxen = require("boxen");
//example for later use console.log(boxen('unicorn', {padding: 1}));
//examples for later use console.log(boxen('unicorn', {padding: 1, margin: 1, borderStyle: 'double'}));

//looking at other code to use clc
let clc = require("cli-color");
var figlet = require('figlet');

let incorrect = clc.red.bold;
let correct = clc.green.bold;
let instructionTextColor = clc.bgRedBright;
let userCorrect = false;

let qbList = ["Montana", "Brady","Elway","Rodgers", "Aikman","Bradshaw",];

let randomWord;
let someWord;
let wins = 0;
let losses = 0;
let guessesRemaining = 10;
let userGuesses = "";

let lettersGuessed = "";
let lettersGuessedList = [];
let underScores = 0;

figlet("QB Hangman", function(err,data ){
    if (err){
        //console.log("not working")
        //n Firefox, these function behave quite differently: log only prints out a toString representation, whereas dir prints out a navigable tree. STACKOVERFLOW..

        console.dir(err);
        return;
    }
    console.log(data)
    //Welcome screen text. --- reference
    console.log(boxen('WELCOME TO QB HANGMAN!', {padding: 1}));
    console.log("Name that Legendary NFL QB");

    let playGame =
    "   Instructions" + "\n"+
    "------------------" + "\n"+
    "Enter any letter when prompted to fill in the blanks and solve the word."+ "\n"+
    "The correct letter you guessed appears in the word." + "\n" +
    "The incorrect letter you guessed does not appear in the word." + "\n" +
    "_________________________________________________________________________"
    console.log(instructionTextColor(playGame));

    startGame();
});



