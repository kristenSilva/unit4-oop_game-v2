/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
var game;

/**
 * `Start Game` button initializes new Game object.
 */
startButton.addEventListener('click', (e) => {
    game = new Game().startGame();
})