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
                li.classList.add('hide', 'letter', `${this.phrase[i]}`);
                li.textContent = `${this.phrase[i]}`;
            }else{
                li.classList.add('space');
                li.textContent = ' ';
            }
            ul.appendChild(li);
        }
    }
}