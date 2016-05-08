	var wins = 0; 
	var guessesremaining = 15; 

//array of words
	var words = ["TOTORO", "HOWL", "PONYO", "KIKI", "CHIHIRO", "MONONOKE", "CATBUS", "SOPHIE"];
	var word =""; 
	var guesses = ""; 
	var word = words[Math.floor(Math.random()*words.length)]; 
 	
 	var html = 
	"<h2>Wins: " + wins + "</h2>" + "<h2>Guesses Remaining: " + guessesremaining + "<h2>Letters Guessed: " + guesses + "</h2>"; 
	
	document.querySelector('#hangman').innerHTML = html; 

document.onkeyup = function(event){
	var guess = String.fromCharCode(event.keyCode).toUpperCase(); 
 

//check for new guess 
	if(!guesses.includes(guess)) {
		guesses = guesses + guess; //push the guess 
		if (!word.includes(guess)) {
			guessesremaining--; 
			console.log(guessesremaining);  
			
		}
		var s = ""; //word string 
		for (var i = 0; i <word.length; i++){

			if (guesses.includes(word[i])) {
				s = s + word[i]; //show the word
			} else{
				s = s + "-" //show the dash
			}
		}	
		console.log(s); //show guesses/letters selected
		if (s==word) { //if the guesses are equal to the word
			wins++; //tally the wins
			var playagain = confirm("You Won! Play Again?");
				//start over 
			if (playagain){
				word = words[Math.floor(Math.random()*words.length)]; 
				guessesremaining = 15; 
				guesses = ""; 

			}
		}
	}
	var html = 
			"<h2>Wins: " + wins + "</h2>" + "<h2>Guesses Remaining: " + guessesremaining + "<h2>Letters Guessed: " + guesses + "</h2>"; 
	document.querySelector('#hangman').innerHTML = html; 

}