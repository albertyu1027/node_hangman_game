var letter = require("./letter.js");
var word = require("./word.js");
var inquirer = require("inquirer");

var count = 0
var array = []

var words = ["field goal", "touchdown", "football"];
var randWord = words[Math.floor(Math.random()*words.length)];
var stringWord = randWord.split("");

console.log(stringWord);
	 
var underScores = function() { 
	for (var i=0; i<stringWord.length; i++) {
		var underScore= stringWord[i].replace(/[a-z]/gi, '_');
		console.log(underScore);
	}
};

underScores();

var askQuestion = function() {
  if (count < 8) {
    inquirer.prompt([
      {
        name: "name",
        message: "Choose a letter. The topic is football. You have eight chances!"
      }
    ]).then(function(answers) {

      for (var i=0; i<stringWord.length; i++) {
	      if (answers.name===stringWord[i]) {
	      	console.log("CORRECT!");
	      	// var matchedLetter= stringWord[i].replace(stringWord[i], answers.name);
	      	// console.log(matchedLetter);

	  for (var i=0; i<stringWord.length; i++) {
			var underScore= stringWord[i].replace(/[a-z]/gi, '_');
			  for (var j=0; j<underScore.length; j++){

	      			var newUnderScore = underScore[j].replace('_', answers.name)
	      			console.log(newUnderScore)
	      		}
      	  }
      } 
  }
  askQuestion();
    });
}

  else {
    console.log("Sorry, you lost.");

  }
};


askQuestion();

