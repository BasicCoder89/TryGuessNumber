
const myNumber = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
const max = 100;
const min = 1;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let equal;

document.getElementById("mySubmit").onclick = function(){
    guess = document.getElementById("myText").value;
    guess = Number(guess);
    attempts++;

    if (guess === answer) {
        document.getElementById("myH2").textContent = ` Congratulations! You guessed the number in ${attempts} attempts.`;
    } 
    else if(guess == 0){
        document.getElementById("myH2").textContent = "0 is not a valid guess dummy"
    }
    else if(guess >= 100) {
        document.getElementById("myH2").textContent = "Your guess is to huge for what we need!"
    }
    else if(guess >= answer){
        document.getElementById("myH2").textContent = "Your number is to high"
    }
    else if(guess <= answer){
        document.getElementById("myH2").textContent = "Your number is to low"
    }
    else {
        document.getElementById("myH2").textContent = "wrong guess. Try again!"
    }
};


