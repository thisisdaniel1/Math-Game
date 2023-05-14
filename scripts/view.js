function printTimeRemaining(){
    const timeText = document.getElementById("time");
    timeText.innerHTML = `<h2>Time left: ${timeLeft}</h2>`;
}

function printGameOver(status){
    if(status === "OUT"){
        var message = `<h1>Time's UP!</h1> <p>Your final score was: ${score}</p>`;
    }
    else{
        var message = `<h1>You Lose!</h1> <p>The number was: ${answer}</p> <p2>Your final score was: ${score}</p2>`;
    }
    document.body.innerHTML = message;
}

// prints state of guess with DOM
function printFirstDigit(number){
    document.getElementById("first-number").src = `assets/${number}.png`;
}

function printSecondDigit(number){
    document.getElementById("second-number").src = `assets/${number}.png`;
}