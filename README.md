# Math-Game
A Simple Addition Game that uses Math.random to generate two numbers between 0-4, displays the two numbers, and asks the player the result. Sets a timer for 5 seconds.

Every correct answer will extend the timer by five seconds and any wrong answer will end the game.

Uses a DOM model and splits the game into model, controller, and view.

The model contains the main game loop and data. 
First the two numbers are rolled then once in the game loop, those numbers will printed
on view and the time will update.

If a number is received from controller, model will compare those that number with the
correct one.
If the answer is correct, the user may continue with additional time, if not then the
game ends with the current score.

The controller tracks all the interactions the user can have.
The user is able to submit a number that is sent to be compared to in model.

The view prints the time and win/lose messages, and the numbers onto the viewport.