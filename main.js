let playerMove = "scissors";
let computerMove = "paper";

// if playerMove = computerMove then draw
// if playerMove = Scissors && computerMove = Paper then Player wins

if(playerMove === computerMove) {
    console.log("draw")
} else if (playerMove === "rock" && computerMove === "scissors") {
    console.log("player win")
} else if (playerMove === "scissors" && computerMove === "paper") {
    console.log("player win")
} else if (playerMove === "paper" && computerMove === "rock") {
    console.log("player win")
} else {
    console.log("computer win")
}