let playerMove = "paper";
let computerMove = "paper";

// if playerMove = computerMove then draw
// if playerMove = Scissors && computerMove = Paper then Player wins

function getWinner (playerMove, computerMove){ if(playerMove === computerMove) {
    return ("0")
} else if (playerMove === "rock" && computerMove === "scissors") {
    return ("1")
} else if (playerMove === "scissors" && computerMove === "paper") {
    return ("1")
} else if (playerMove === "paper" && computerMove === "rock") {
    return ("1")
} else {
   return ("-1")
}

}
let result = getWinner("scissors", "scissors");
console.log(result);
