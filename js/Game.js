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
        let phrases = [];
        let quotes = ['Hello world', 'See the good', 'Sweeter than honey', 'Te calmas o te calmo', 'El hubiera no existe']
        for(let i = 0; i < 5; i++){
            phrases.push(new Phrase(quotes[i]));
        }
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
        //get random phrase
        const playPhrase = this.getRandomPhrase();
        //display the phrase
        playPhrase.addPhraseToDisplay();
        //update game activePhrase property
        this.activePhrase = playPhrase;
    }
}