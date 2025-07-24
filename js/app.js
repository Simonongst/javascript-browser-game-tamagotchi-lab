/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boredom = 0;
let hunger = 0;
let sleepiness = 0;
let timer;
let gameOver = false;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEl = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');
const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');
const gameMessageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('restart');

/*-------------------------------- Functions --------------------------------*/
function init(){
    timer = setInterval(runGame(), 2000);
};

init();

function runGame(){
    console.log('the game is running!');
};

/*----------------------------- Event Listeners -----------------------------*/


