var words = ["field goal", "touchdown", "football", "kicker", "offensive lineman", "center", "quarterback"];

exports.chooseWord = function(){
	var randWord = Math.floor((Math.random()*words.length)+1);
	return words[randWord];
}