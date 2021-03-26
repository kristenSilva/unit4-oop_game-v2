/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
     * Creates phrases for use in game
     * @return {array} An array of phrase objects to be used in game
     */
    createPhrases(){
        const quotes = ['One can never have enough socks', 'I solemnly swear that I am up to no good', 'Happiness can be found even in the darkest of times', 'It does not do to dwell on dreams and forget to live', 'Not all those who wander are lost']
        const phrases = quotes.map(quote=> new Phrase(quote), []);
        return phrases;
    };
    /**
     * Selects a random phrase from the phrases property
     * A random number between 0 and last index of phrases array
     * @returns {object} Phrase object to be used that's created by calling Phrase class constructor
     */
    getRandomPhrase(){
        const selection = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[selection];
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame(){
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /**
     * Checks to see if all letters in active phrase have been revealed
     * @return {boolean} True if won, false if not
     */
    checkForWin(){
        const hiddenLetters = document.getElementsByClassName('hide');
        return hiddenLetters.length === 0;
    }
    /**
     * Removes a life from the scoreboard by updating heart images
     * Increases the value of the missed property
     * Checks if player has remaining lives and ends game if player doesn't
     */
    removeLife(){
        //array of <li> that contain images
        const liveHearts = document.getElementById('scoreboard').getElementsByClassName('tries');
        //store last index for liveHearts array
        const lastIndex = liveHearts.length-1;
        //grab the last <img> element within the live hearts
        let lastImg = liveHearts[lastIndex].getElementsByTagName('img')[0];
        //update with a lost heart image
        lastImg.src = 'images/lostHeart.png';
        //remove 'tries' class so liveHearts array is updated on next call
        lastImg.parentElement.classList.remove('tries');

        this.missed += 1;
        if(this.missed === 4){
            liveHearts[0].getElementsByTagName('img')[0].classList.add('headShake');
        }
        if(this.missed === 5){
            this.gameOver();
        }
    }
    /**
     * Updates `overlay` message and style format according to gameWon
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon){
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'inherit';
        const gameOverMessage = document.getElementById('game-over-message');
        if(gameWon){
            gameOverMessage.innerHTML = '🎉 You Won! 🎉';
            gameOverMessage.classList.add('animated','tada');
            overlayDiv.className = 'win';
        }else{
            gameOverMessage.innerHTML = 'Sorry, better luck next time!';
            gameOverMessage.classList.add('animated', 'fadeInLeft');
            overlayDiv.className = 'lose';
        }
        this.resetGame();
    }
    /**
     * Removes phrase displayed, resets screen keyboard and heart images
     */
    resetGame(){
        //remove phrase from screen
        const ulPhrase = document.getElementById('phrase').getElementsByTagName('ul')[0];
        ulPhrase.innerHTML = '';
        //enable all onscreen keyboard buttons
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach(button => button.className = 'key');
        keyboardButtons.forEach(button => button.disabled = false);
        //reset all heart images and <li> holders
        const hearts = document.querySelectorAll('img');
        hearts.forEach(heart => heart.src = 'images/liveHeart.png');
        const liHolder = [];
        hearts.forEach(heart => liHolder.push(heart.parentElement));
        liHolder.forEach(li => li.className = 'tries');
        //reset all lives
        this.missed = 0;
    }
    /**
     * Mangages user interaction with onscreen keyboard buttons
        * Clicked letter is checked against active phrase for matches
        * Game checks if player has won and calls gameOver to display correct message
     * @param {button} button - Any screen keyboard button
     */
    handleInteraction(button){
        button.disabled = true;
        const clickedLetter = button.textContent;
        const match = this.activePhrase.checkLetter(clickedLetter);
        //check captured letter against active phrase for matches
        if(!match){
            button.classList.add('wrong', 'hinge');
            this.removeLife();
        } 
        if(match) {
            button.classList.add('chosen', 'bounce');
            this.activePhrase.showMatchedLetter(clickedLetter);
            const win = this.checkForWin();
            if(win){
                this.gameOver(win);
            }
        }
    }
}