let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () => {
    // randomly generate either rock, paper or scissors
    const options = ["Rock", "Paper", "Scissors"];
    // Cannot randomly generate a string so use number generator
    const randomIdx = Math.floor(Math.random() * 3); // Generates a random number which we will use as index for options
    // Math.random * 3 generates a number randomly from 0, 1, 2
    // Math.floor to convert float number in a whole number
    return options[randomIdx];
};


const drawGame = () => {
    console.log("This game was a Draw!")
    msg.innerText = "Game was a Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin == true) {
        console.log("You Win!");
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    // Generate computer choice -> modular programming
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
            //user = rock, comp = paper then user loses else user wins
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
            // user = paper, comp = scissors then user loses else user wins
        }
        else{
            // rock, paper
            compChoice === "rock" ? false : true;
            // user = scissors, comp = rock then user loses else user wins 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log(`choice ${userChoice} was clicked`)
        playGame(userChoice);
    })
});