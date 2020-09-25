let playerMove = "paper"
let computerMove = "paper";

// if playerMove = computerMove then draw
// if playerMove = Scissors && computerMove = Paper then Player wins


let playAgain = true; 
let games = 0
let wins = 0
let losses = 0

let userName = document.querySelector(".user_name")
let  userBtn = document.querySelector(".user_button")
let userHeader = document.querySelector(".header-one")
userBtn.addEventListener("click", function userCreator(){
    
    userHeader.innerText = userName.value

}

)

 


let rock = document.querySelector(".rock")

rock.addEventListener("click",function rockMove(){
    playerMove = "rock"
    getWinner(playerMove,computerMove)
} )

let scissors = document.querySelector(".scissors")

scissors.addEventListener("click",function scissorsMove(){
    playerMove = "scissors"
    getWinner(playerMove,computerMove)
} )

let paper = document.querySelector(".paper")

paper.addEventListener("click",function paperMove(){
    playerMove = "paper"
    getWinner(playerMove,computerMove)
} )

function getWinner (playerMove, computerMove){
    //while (playAgain === true) {
        
    // make ranges 

    

    let randNum = Math.random()

    if (randNum < 0.333) {
        computerMove = "rock"
    } else if (0.333 <= randNum && randNum < 0.666) {
        computerMove = "scissors"
    } else if (0.666 <= randNum){
        computerMove = "paper"
    }

    //playerMove = prompt("3... 2... 1...")

    console.log(randNum)
    console.log(computerMove)

    games++ // add one to games played

    

    if(playerMove === computerMove) {
        //alert("0")
    } else if (playerMove === "rock" && computerMove === "scissors") {
        //alert("1")
        wins++
    } else if (playerMove === "scissors" && computerMove === "paper") {
        //alert("1")
        wins++
    } else if (playerMove === "paper" && computerMove === "rock") {
        //alert("1")
        wins++
    } else {
        //alert("-1")
        losses++
    }

    let gameTotal = document.querySelector(".games_played") 

    gameTotal.innerText = "Games Played: " + games.toString()

    let winTotal = document.querySelector(".wins") 

    winTotal.innerText = "Wins: " + wins.toString()

    let lossTotal = document.querySelector(".losses") 

    lossTotal.innerText = "Losses: " + losses.toString()
    //playAgain = confirm(`Games Played: ${games} \nWins: ${wins} \nLosses: ${losses} \nFancy another game?`) 
}


//console.log(result);

//}



//Using `prompt`, get a user inputted value for the player move.
//Then call your function with that value and the hard coded computer move. Display the result using `alert`.

//Write a function that generates a random computer move 
//(`Math.random()` might be useful...). Use that function to make a dynamic game where the computer move is randomly chosen every time.




