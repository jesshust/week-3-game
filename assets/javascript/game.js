	var wins = 0; 
	var guessesremaining; 

//array of words //global scope
	var words = ["TOTORO", "HOWL", "PONYO", "KIKI", "CHIHIRO", "MONONOKE", "CATBUS", "SOPHIE", "CALCIFER", "JIJI", "NOFACE", "ASHITAKA", "HAKU", 
	"MEI", "TOMBO", "SOSUKE"];
	var images =["assets/images/rsz_totoro.jpg", "assets/images/rsz_howl.jpg", "assets/images/rsz_ponyo.jpg",
	 "assets/images/rsz_kiki.jpg", "assets/images/chihiro.jpg", "assets/images/rsz_princessmononoke.jpg", 
	 "assets/images/rsz_catbus.jpg", "assets/images/rsz_sophie.jpg", "assets/images/rsz_calcifer.jpg", "assets/images/rsz_jiji.jpg",
	 "assets/images/rsz_noface.jpg", "assets/images/rsz_ashitaka.jpg", "assets/images/rsz_haku.jpg", "assets/images/rsz_mei.jpg", "assets/images/rsz_tombo.jpg", 
	 "assets/images/sosuke.jpg"]
	var index; 
	var word; 
	var guesses; 
	var word;
	var image; 
	var revealedword; 
	var music = new Audio('assets/kikismusic.mp3');
		music.play();

//not a global scope
	resetgame(); 
	function resetgame (){ //curly braces are a scope change 

		index = Math.floor(Math.random()*words.length); 
		word = words[index];
		image = images[index];
		guessesremaining = 15; 
		guesses = ""; 

		buildrevealword(); 

//local scope to this function 
		var html = 
		"<h2>WINS: " + wins + "</h2>" + "<h2>GUESSES REMAINING: " + guessesremaining + "<h2>WORD: " + revealedword + "</h2>" + "<h2>LETTERS GUESSED: " + guesses + "</h2>" + "<h1>THE IMAGE IS YOUR HINT!</h1>"; 
		
		document.querySelector('#hangman').innerHTML = html; 
		document.getElementById('changingimage').src=image; 
	}

	function buildrevealword (){ 
		revealedword = ""; //word string 
		for (var i = 0; i <word.length; i++){ //i only exists in this loop

			if (guesses.includes(word[i])) {
				revealedword= revealedword + word[i]; //show the word
			} else{
				revealedword = revealedword + "-" //show the dash
			}
		}
	}

document.onkeyup = function(event){
		if(event.keyCode < 65 || event.keyCode > 90) {return;}
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
			resetgame(); //calls the resetgame function
		} else if (guessesremaining == 0) {
			resetgame(); 
		}
	}
	var html = 
		"<h2>WINS: " + wins + "</h2>" + "<h2>GUESSES REMAINING: " + guessesremaining + "<h2>WORD: " + revealedword + "</h2>" + "<h2>LETTERS GUESSED: " + guesses + "</h2>" + "<h1>THE IMAGE IS YOUR HINT!</h1>"; 
		
		document.querySelector('#hangman').innerHTML = html;  

	}