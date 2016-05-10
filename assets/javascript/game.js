	var wins = 0; 
	var guessesremaining; 

//array of words
	var words = ["TOTORO", "HOWL", "PONYO", "KIKI", "CHIHIRO", "MONONOKE", "CATBUS", "SOPHIE"];
	var images =["assets/images/rsz_totoro.jpg", "assets/images/rsz_howl.jpg", "assets/images/rsz_ponyo.jpg", "assets/images/rsz_kiki.jpg", "assets/images/rsz_chihiro.jpg", "assets/images/rsz_princessmononoke.jpg", "assets/images/rsz_catbus.jpg", "assets/images/rsz_sophie.jpg"]
	var index; 
	var word; 
	var guesses; 
	var word;
	var image; 
	var revealedword;  

	resetgame(); 
	function resetgame (){ 

		index = Math.floor(Math.random()*words.length); 
		word = words[index];
		image = images[index];
		guessesremaining = 15; 
		guesses = ""; 

		buildrevealword(); 

		var html = 
		"<h2>WINS: " + wins + "</h2>" + "<h2>GUESSES REMAINING: " + guessesremaining + "<h2>WORD: " + revealedword + "</h2>" + "<h2>LETTERS GUESSED: " + guesses + "</h2>"; 
		
		document.querySelector('#hangman').innerHTML = html; 
		document.getElementById('changingimage').src=image; 
	}

	function buildrevealword (){ 
		revealedword = ""; //word string 
		for (var i = 0; i <word.length; i++){

			if (guesses.includes(word[i])) {
				revealedword= revealedword + word[i]; //show the word
			} else{
				revealedword = revealedword + "-" //show the dash
			}
		}
	}

document.onkeyup = function(event){
	var guess = String.fromCharCode(event.keyCode).toUpperCase(); 
 

//check for new guess 
	if(!guesses.includes(guess)) {
		guesses = guesses + guess; //push the guess 
		if (!word.includes(guess)) {
			guessesremaining--; 
			console.log(guessesremaining);  
			
		}
		buildrevealword (); 
		if (revealedword==word) { //if the guesses are equal to the word
			wins++; //tally the wins
			resetgame(); 
		}
	}
	var html = 
		"<h2>WINS: " + wins + "</h2>" + "<h2>GUESSES REMAINING: " + guessesremaining + "<h2>WORD: " + revealedword + "</h2>" + "<h2>LETTERS GUESSED: " + guesses + "</h2>"; 
		
		document.querySelector('#hangman').innerHTML = html;  
	}