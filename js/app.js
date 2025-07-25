/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}
let timer;
let gameOver = false;

/*------------------------ Cached Element References ------------------------*/
const boredomStatEl = document.querySelector('#boredom-stat');
const hungerStatEl = document.querySelector('#hunger-stat');
const sleepinessStatEl = document.querySelector('#sleepiness-stat');

const playBtnEl = document.querySelector('#play');
const feedBtnEl = document.querySelector('#feed');
const sleepBtnEl = document.querySelector('#sleep');

const gameMessageEl = document.querySelector('#message');
const resetBtnEl = document.querySelector('#restart');

/*-------------------------------- Functions --------------------------------*/
const render = () => {
    boredomStatEl.textContent = state.boredom;
    hungerStatEl.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

    if(gameOver){
        clearInterval(timer);
        resetBtnEl.classList.remove("hidden");
        gameMessageEl.classList.remove("hidden");
    };
};

const updateStates = () => {
    state.boredom += Math.ceil(Math.random(state.boredom) * 3);
    state.hunger += Math.ceil(Math.random(state.hunger) * 3);
    state.sleepiness += Math.ceil(Math.random(state.sleepiness) * 3);
};

const checkGameOver = () => {
    if(state.boredom > 9 || state.hunger > 9 || state.sleepiness > 9){
        gameOver = true;
    };
};

const playBtnClick = () => {
    state.boredom = 0;
    render();
};

const feedBtnClick = () => {
    state.hunger = 0;
    render();
};

const sleepBtnClick = () => {
    state.sleepiness = 0;
    render();
};

const runGame = () => {
    updateStates();
    checkGameOver();
    render();
};

const init = () => {
    resetBtnEl.classList.add('hidden');
    gameMessageEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000);
    gameOver = false;
    render();
};

init();

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepBtnClick);
resetBtnEl.addEventListener('click', init);