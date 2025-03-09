let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector(".reset-btn");

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
    msg.innerText = "Game was a Draw. Play Again!"
    msg.style.backgroundColor = "#081b31";
};


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    // Generate computer choice -> modular programming
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "Rock") {
            // scissors, paper
            userWin = compChoice === "Paper" ? false : true;
            //user = rock, comp = paper then user loses else user wins
        }
        else if(userChoice === "Paper"){
            // rock, scissors
            userWin = compChoice === "Scissors" ? false : true;
            // user = paper, comp = scissors then user loses else user wins
        }
        else{
            // rock, paper
            userWin = compChoice === "Rock" ? false : true;
            // user = scissors, comp = rock then user loses else user wins 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});