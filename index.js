//console.log ("Hello!")
let Word = require("./word.js");
let inquire = require("inquirer");
/// npm i boxen use this for correct answers
const boxen = require("boxen");
//console.log(boxen('unicorn', {padding: 1}));

//looking at other code to use clc
let clc = require("cli-color");
var figlet = require('figlet');

let incorrect = clc.red.bold;
let correct = clc.green.bold;
let gameTextColor = clc.cyanBright;
let userCorrect = false;

let wordList = ["Montana", "Brady","Elway","Rodgers", "Aikman","Bradshaw",];

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
    console.log(gameTextColor("Welcome to the QB Hangman Game!"));
    console.log(gameTextColor("Name that Legendary NFL QB"));

    let playGame =
    "   Instructions" + "\n"+
    "------------------" + "\n"+
    "Enter any letter when prompted to fill in the blanks and solve the word."+ "\n"+
    "The correct letter you guessed appears in the word." + "\n" +
    "The incorrect letter you guessed does not appear in the word." + "\n" +
    "_________________________________________________________________________"
    console.log(playGame);

    startGame();
});

function startGame()


