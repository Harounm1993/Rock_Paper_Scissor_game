let playerMove = "paper";
let computerMove = "paper";

// if playerMove = computerMove then draw
// if playerMove = Scissors && computerMove = Paper then Player wins

function getWinner (playerMove, computerMove){
    
    playerMove = prompt("3... 2... 1...")

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

}
getWinner(playerMove,computerMove)
//console.log(result);

//Using `prompt`, get a user inputted value for the player move.
//Then call your function with that value and the hard coded computer move. Display the result using `alert`.
