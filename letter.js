var runthis = require('./runthis.js');
exports.guessArr = [];
var guessDisplay = "";
exports.wordArr = [];

exports.initDisplay = function(){
	var wordChoice = runthis.chosenWord;
	for(var i = 0; i<wordChoice.length; i++){
		exports.wordArr.push(wordChoice.charAt(i));
		if(wordChoice.charAt(i) == '\xa0'){
			exports.guessArr.push('\xa0');		
		}
		else{
		exports.guessArr.push('_');
		}
	};

}

exports.displayWord = function(){
	guessDisplay = "";
	for(var i = 0; i <exports.guessArr.length; i++){
		guessDisplay += exports.guessArr[i]+" ";
	}
	console.log(guessDisplay);
};

exports.editArray = function(position, letter){
	exports.guessArr[position] = letter; 
};
