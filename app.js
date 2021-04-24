//variables
const playerOneScore = document.querySelector('#player1Score');
const playerTwoScore = document.querySelector('#player2Score');
const playerOneBtn = document.querySelector('#player1Btn');
const playerTwoBtn = document.querySelector('#player2Btn');

const resetBtn = document.querySelector('#resetBtn');

const scoreInput = document.querySelector('#scoreSelect');
let maxScore = 3;
let p1Score = 0;
let p2Score = 0;

// Update maxScore with user input
scoreInput.addEventListener('change', (e) => {
    maxScore = parseInt(scoreInput.value);
})

// Player One button connected to player one span
playerOneBtn.addEventListener('click', (e) => {
    if(p1Score < maxScore && p2Score !== maxScore){
        p1Score += 1;
        playerOneScore.textContent = p1Score;
    }
    endGame();
});

// Player Two button connected to player two span
playerTwoBtn.addEventListener('click', (e) => {
    if (p2Score < maxScore && p1Score !== maxScore){
        p2Score += 1;
        playerTwoScore.textContent = p2Score;
    } 
    endGame();
});

// Ending the Game
const endGame = () => {
    if (p1Score === maxScore) {
        playerOneScore.classList.toggle('has-text-success');
        playerTwoScore.classList.toggle('has-text-danger');
        disable();
    } else if(p2Score === maxScore){
        playerTwoScore.classList.toggle('has-text-success');
        playerOneScore.classList.toggle('has-text-danger');
        disable();
    }
}

const disable = () => {
    playerOneBtn.setAttribute('disabled', '');
    playerTwoBtn.setAttribute('disabled', '');
    scoreInput.disabled = true;
}

// Reset
const reset = () => {
    maxScore = 3;
    scoreInput.value = 0;
    scoreInput.disabled = false;
    // Player One
    p1Score = 0;
    playerOneScore.textContent = 0;
    playerOneScore.classList.remove('has-text-success', 'has-text-danger');
    playerOneBtn.removeAttribute('disabled', '');
    // Player Two
    p2Score = 0;
    playerTwoScore.textContent = 0;
    playerTwoScore.classList.remove('has-text-success', 'has-text-danger');
    playerTwoBtn.removeAttribute('disabled', '');
}

resetBtn.addEventListener('click', reset);