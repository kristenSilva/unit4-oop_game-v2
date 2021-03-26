/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /**
     * Adds letter placeholders to display when game starts
     * Each letter is an empty box (one <li> for each letter)
     * Class attributes: 'hide', 'letter' OR 'space', 'actual character name'
     */
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').getElementsByTagName('ul')[0];
        for(let i = 0; i < this.phrase.length; i++){
            let li = document.createElement('li');
            const letterRegEx = /[a-z]/.test(this.phrase[i]);
            if(letterRegEx){
                li.classList.add('hide', 'letter', 'jackInTheBox',`${this.phrase[i]}`);
                li.textContent = `${this.phrase[i]}`;
            }else{
                li.classList.add('space');
                li.textContent = ' ';
            }
            ul.appendChild(li);
        }
    }
    /**
     * Checks if passed letter is in phrase
     * @param {string} letter - letter to check
     */
    checkLetter(letter){
        let letterIsValid = this.phrase.includes(letter);
        return letterIsValid;
    }
    /**
     * Displays passed letter on screen after a match is found
     * @param {string} letter - letter to display
     */
    showMatchedLetter(letter) {
        //array of the <li> elements with the specific letter class
        const matches = document.querySelectorAll(`.${letter}`);
        for(let i = 0; i < matches.length; i++){
            matches[i].classList.remove('hide');
            matches[i].classList.add('show');
        }
    }
}