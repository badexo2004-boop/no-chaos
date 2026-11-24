const prompt = require('prompt-sync')();

let numberOfAttempt = 5, guessedNumber = 50;
while(numberOfAttempt >= 1 ){
	let number = Number(prompt("Guess a number from 1 to 100: "))
	if(number == guessedNumber){
		console.log("Congrats you won!!!")
	}else{
	numberOfAttempt--
	console.log(`Number of attempts left are ${numberOfAttempt}`)
	continue
	}
	
}
