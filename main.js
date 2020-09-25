let playerMove = "paper"
let computerMove = "paper";

// if playerMove = computerMove then draw
// if playerMove = Scissors && computerMove = Paper then Player wins

let randNum = Math.random()
let playAgain = true; 
function getWinner (playerMove, computerMove){
    while (playAgain === true) {
        
    // make ranges 

    if (randNum < 0.333) {
        computerMove = "rock"
    } else if (0.333 <= randNum && randNum < 0.666) {
        computerMove = "scissors"
    } else if (0.666 <= randNum){
        computerMove = "paper"
    }

    playerMove = prompt("3... 2... 1...")

    console.log(randNum)
    console.log(computerMove)

    if(playerMove === computerMove) {
        alert("0")
    } else if (playerMove === "rock" && computerMove === "scissors") {
        alert("1")
    } else if (playerMove === "scissors" && computerMove === "paper") {
        alert("1")
    } else if (playerMove === "paper" && computerMove === "rock") {
        alert("1")
    } else {
        alert("-1")
    }
    playAgain = confirm("fancy another game?") 
}


//console.log(result);
}
getWinner(playerMove,computerMove)
//Using `prompt`, get a user inputted value for the player move.
//Then call your function with that value and the hard coded computer move. Display the result using `alert`.

//Write a function that generates a random computer move 
//(`Math.random()` might be useful...). Use that function to make a dynamic game where the computer move is randomly chosen every time.



