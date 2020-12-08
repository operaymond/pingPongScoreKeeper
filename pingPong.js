

const playerOneScore = document.querySelector('#num1');
const playerTwoScore = document.querySelector('#num2');
const input = document.querySelector('input');
const buttonOne = document.querySelector('#player1');
const buttonTwo = document.querySelector('#player2');
const resetScore = document.querySelector('#reset');

let gameGoal;
let pointCount1 = 0;
let pointCount2 = 0;
let isGameOver = false;

// allows user to set game goal
let userDefinedGoal = input.addEventListener('input', function (e) {
    gameGoal = input.value;
});

// sets game goal if user does not define it
if (!userDefinedGoal) {
    gameGoal = 21;
}

//player 1 score
buttonOne.addEventListener('click', function (e) {
    if (!isGameOver) {
        pointCount1 += 1;
        playerOneScore.innerHTML = `${pointCount1}`;
        color();
        winner();
    }
});

//player 2 score 
buttonTwo.addEventListener('click', function (e) {
    if (!isGameOver) {
        pointCount2 += 1;
        playerTwoScore.innerHTML = `${pointCount2}`;
        color();
        winner();
    }
});

// reset button
resetScore.addEventListener('click', function (e) {
    reset();
});

//current lead color function
const color = () => {
    if (pointCount1 > pointCount2) {
        playerOneScore.style.color = 'rgb(52, 102, 52)';
        playerTwoScore.style.color = 'rgb(119, 54, 54)';
    } else if (pointCount2 > pointCount1) {
        playerOneScore.style.color = 'rgb(119, 54, 54)';
        playerTwoScore.style.color = 'rgb(52, 102, 52)';
    } else {
        playerOneScore.style.color = 'rgb(211, 207, 207)';
        playerTwoScore.style.color = 'rgb(211, 207, 207)';
    }
};

// game winner / loser functionality
const winner = () => {
    if (pointCount1 >= gameGoal) {
        playerOneScore.innerHTML = "Winner!";
        playerTwoScore.innerHTML = "Loser!";
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
        isGameOver = true;
    } else if (pointCount2 >= gameGoal) {
        playerTwoScore.innerHTML = "Winner!";
        playerOneScore.innerHTML = "Loser!";
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
        isGameOver = true;
    }
};

// reset function
const reset = () => {
    isGameOver = false;
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
    input.value = 21;
    gameGoal = 21;
    pointCount1 = 0;
    pointCount2 = 0;
    playerOneScore.style.color = 'black';
    playerTwoScore.style.color = 'black';
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
}



