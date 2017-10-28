var inquirer = require('inquirer');
var game = require('./game.js');
var word = require('./word.js');
var letter = require('./letter.js')
var choice;
exports.letter; 
exports.wordGuess;
exports.lives = 0; 
exports.chosenWord = game.chooseWord();

//Function to request user input to decide whether you want to guess a letter or guess the word, then ask you what letter or word you want to guess. 
exports.requestInfo = function(){
	if(exports.lives >= 10){
		console.log("You lose");
		exports.playAgain();
	}
	else{
		var questions = [
	{
		type: "list",
		name: "whatDo",
		message: "Guess a Letter! Or a word if you know it! You have 10 guesses.",
		choices:[
		"letter",
		"word"
		]
	}
	];

	inquirer.prompt(questions).then(function(answers){
		if(answers.whatDo == "letter"){
			var letterQ = [
			{
				type: "input",
				name: "letter",
				message: "Already picked: "+word.letterArr+"\nCurrent Guess: "
			}
			];

			inquirer.prompt(letterQ).then(function(answers){
				exports.letter = answers.letter;
				word.checker();
			})
		}
		else if(answers.whatDo == "word"){
			var wordQ = [
			{
				type: "input",
				name: "word",
				message: "Which word do you think it is?"
			}
			];
			inquirer.prompt(wordQ).then(function(answers){
				exports.wordGuess = answers.word;
				word.checkWord();
			})
		}
		else{
			console.log("Wrong answer. Please try again.");
			exports.requestInfo();
		}
	})
	}
	
};

exports.playAgain = function(){
	var questions = [
	{
		type: "list",
		name: "playAgain",
		message: "Would you like to play again?",
		choices:[
		"yes",
		"no"
		]
	}
	];

	inquirer.prompt(questions).then(function(answer){
		if(answer.playAgain == "yes"){
			exports.lives = 0; 
			exports.chosenWord = game.chooseWord();
			letter.guessArr = [];
			letter.wordArr = [];
			word.letterArr = [];
			letter.initDisplay();
			letter.displayWord();
			exports.requestInfo();
		}
		else{
			console.log("See ya later!");
		}
	});
}

letter.initDisplay();
letter.displayWord();
exports.requestInfo();