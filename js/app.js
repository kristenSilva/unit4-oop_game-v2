/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
const keyboardDiv = document.getElementById('qwerty');
var game;

/**
 * `Start Game` button initializes new Game object.
 */
startButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

/**
 * Event listener for screen keyboard
 */
keyboardDiv.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        game.handleInteraction(e.target);
    }
})