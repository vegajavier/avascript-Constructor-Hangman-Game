console.log ("Hello!")
let Word = require("./word.js");
let inquire = require("inquirer");
/// npm i boxen use this for correct answers
const boxen = require("boxen");
//console.log(boxen('unicorn', {padding: 1}));

//looking at other code to use clc
let clc = require("cli-color");

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



