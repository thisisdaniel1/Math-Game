let firstNumber = 0;
let secondNumber = 0;
let answer = 0;
roll();

// creates a random number from 0-4
function roll(){
    firstNumber = Math.floor(Math.random()*5);
    secondNumber = Math.floor(Math.random()*5);
    answer = firstNumber + secondNumber;
}

// use Date class to get current time in epoch time
let then = Date.now();
let timeLeft = 5;
let gameOver = false;
let score = 0;

// Callback function for event: Button click
function guessNumber(guess){
    if(guess == answer){
        roll();
        score++;
        timeLeft = timeLeft + 5;
    }
    else{
        gameOver = true;
        printGameOver("LOSE");
    }
}

function main(){
    const now = Date.now();
    // skip if game has ended
    if(gameOver){
        return;
    }
    else if (timeLeft <= 0){
        printGameOver("OUT");
    }
    // recursively prints the digits after a second has passed, 1000ms
    else if (now - then > 1000){
        timeLeft--;
        printFirstDigit(firstNumber);
        printSecondDigit(secondNumber);
        printTimeRemaining();
        then = Date.now();
    }
    requestAnimationFrame(main);
}
main();