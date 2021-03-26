/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
const keyboardDiv = document.getElementById('qwerty');
const title = document.getElementsByClassName('title')[0];
var game;

//title.classList.add('animated','zoomIn');

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

/**
 * Event listener for physical computer keyboard
 * Idea for `for loop` from https://stackoverflow.com/questions/3813294/how-to-get-element-by-innertext
 */
document.addEventListener('keydown', (e) => {
    const screenButtons = document.querySelectorAll('.key');
    var clicked;
    for(let i = 0; i < screenButtons.length; i++){
        if(!screenButtons[i].classList.contains('chosen') && !screenButtons[i].classList.contains('wrong')){
            if(screenButtons[i].textContent === e.key){
                clicked = screenButtons[i];
                game.handleInteraction(clicked);
                break;
            }
        }
    }
})