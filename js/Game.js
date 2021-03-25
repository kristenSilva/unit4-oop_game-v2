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
     * @return {array} An array of phrases to be used in game
     */
    createPhrases(){
        const quotes = ['Hello world', 'See the good', 'Sweeter than honey', 'Te calmas o te calmo', 'El hubiera no existe']
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
    // startGame(){
    //     const overlayDiv = document.getElementById('overlay');
    //     overlayDiv.style.display = 'none';
    //     //get random phrase
    //     const playPhrase = this.getRandomPhrase();
    //     //display the phrase
    //     playPhrase.addPhraseToDisplay();
    //     //update game activePhrase property
    //     this.activePhrase = playPhrase;
    // }
    startGame(){
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        //let game = new Game();
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
     * Checks if player has remaining lives and end games if player doesn't
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
        if(this.missed === 5){
            this.gameOver();
        }
    }
    /**
     * Updates `overlay` message and style format according to gameWon
     * @param {gameWon} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon){
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'inherit';
        const gameOverMessage = document.getElementById('game-over-message');
        if(gameWon){
            gameOverMessage.innerHTML = 'You Won!';
            overlayDiv.className = 'win';
        }else{
            gameOverMessage.innerHTML = 'Sorry, better luck next time!';
            overlayDiv.className = 'lose';
        }
    }
    /**
     * Mangages user interaction with onscreen keyboard buttons
        * Clicked/choosen letter is captured
        * Captured letter is checked against active phrase for matches
            * If match then letter is displayed
            * Else remove life
        * Game checks if player has won (all letters displayed vs no lives left)
            * If won display winning message
            * If lost display losing message   
     */
    handleInteraction(button){
        console.log(button);
    }
}