//console.log ("Hello!")
let Word = require("./word.js");
let inquirer = require("inquirer");
/// npm i boxen use this for correct answers & game opening
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


// array of words for game
let qbList = ["Montana", "Brady","Elway","Rodgers", "Aikman","Bradshaw","Unitas", "Marino", "Young","Favre","Warner","Moon"];
//create a loop 
let randomWord;
let someWord;
// generate scores?
let wins = 0;
let losses = 0;
//countdown
let guessesRemaining = 10;
let guesses = "";

let guessedLetters = "";
let guessedLettersList = [];
let underScores = 0;

figlet("QB Hangman", function(err,data ){
    if (err){
        //console.log("not working")
        //n Firefox, these function behave quite differently: log only prints out a toString representation, whereas dir prints out a navigable tree. STACKOVERFLOW..
        console.dir(err);
        return;
    }
    console.log(data)
    //Welcome screen text. --- reference---
    console.log(boxen('WELCOME TO QB HANGMAN!', {padding: 1}));
    console.log("Name that Legendary NFL QB");

    let instructions =
    "   Instructions" + "\n"+
    "------------------" + "\n"+
    "Enter any letter when prompted to fill in the blanks and solve the word."+ "\n"+
    "The correct letter you guessed appears in the word." + "\n" +
    "The incorrect letter you guessed does not appear in the word." + "\n" +
    "_________________________________________________________________________"
    console.log(instructionTextColor(instructions));

    startGame();
});

function startGame (){
    let infoForStartGame = [{
        type: 'text',
        name: "userName",
        message: "Please Enter Your Name"
    },
    {
        type: 'confirm',
        name: 'startplay',
        message: "Select Y or N to play",
        default: true
    }
    ];
    //]).then(function(answers) {
  // initializes the variable newProgrammer to be a programmer object which will take
  // in all of the user's answers to the questions above
  //var newProgrammer = new Programmer(answers.name, answers.position, answers.age, answers.language); EXAMPLE FROM CLASS

  inquirer.prompt(infoForStartGame).then(answers => {
    if (answers.startPlay){
        console.log("Word, " + answers.userName + ". Let's get it!");
        startGame();
    }
    else {
        console.log("Peace! " + answers.userName + " we'll see you later my G!.");
        return;
    }
});
}




