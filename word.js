var runthis = require("./runthis.js");
var letter = require("./letter.js");
exports.letterArr = [];

exports.checkWord = function(){
	var guess = runthis.wordGuess;
	var word = runthis.chosenWord;
	var isNotEqual; 
	for(var k = 0; k<word.length; k++){
		if(guess[k] != word[k]){
			isNotEqual = false; 
		}
		else{
			isNotEqual = true; 
		}
	}

	if(isNotEqual == true){
		console.log("Good Job!");
		runthis.playAgain();
	}
	else{
		console.log("Sorry, that's incorrect.");
		runthis.lives++;
		runthis.requestInfo();
	}
};

exports.checker = function(){
	var wordToCheck = runthis.chosenWord;
	exports.letterArr.push(runthis.letter);
	var detected = 0; 
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == runthis.letter){
			letter.editArray(i, runthis.letter);
			detected++;
		}
	}
	letter.displayWord();
	if(detected == 0){
		runthis.lives++; 
	}
	runthis.requestInfo();

}; 