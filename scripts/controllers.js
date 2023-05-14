const button = document.getElementById("guess-button");
const number = document.getElementById("guess-text");
button.addEventListener("click", buttonEvent);


function buttonEvent(){
    const guess = number.value;
    guessNumber(guess);
}