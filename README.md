# unit4-project-techdegree
 
OOP Game Show App

A browser-based, word guessing game created with JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase. A user tries to guess by clicking letters on an onscreen or physical keyboard. Creates two JavaScript classes with specific properties and methods: (1) a Game class for managing the game and (2) a Phrase class to help with creating an array of Phrase objects. Code will choose a random phrase, split the phrase into letters, and put those letters onto the gameboard. Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase. If the letter is in the phrase, the gameboard displays the chosen letters on the screen. A player continues to select letters until they guess the phrase (and win), or make five incorrect guesses (and lose). If the player completes the phrase before they run out of guesses, a winning screen appears. If the player guesses incorrectly five times, a losing screen appears. A player can guess a letter only once. After they’ve guessed a letter, your programming will need to disable that letter on the onscreen keyboard.

Formatting changes
1. Changed the overlay title and the header to `font-family: 'copperplate', fantasy` in `styles.css`.
2. When user selects a letter (via screen or physical keyboard) the screen keyboard animates with `bounce` if correct match or `hinge` if incorrect. `styles.css` was updated to manage animation duration and `Game.js` was updated to call animation.
3. `Game Over` message animates with `tada` if user won game or `fadeInLeft` if lost. Animation was made in `Game.js` and font size for message was updated in `styles.css`.
4. `button` background color was updated to `#FFFFFF` in `styles.css`.
5. `.main-container` background color was updated to `#D0E1F9` in `styles.css`.
6. `.letter` background color was updated to `#4c5c7e` and animation duration was updated in `styles.css`. `jackInTheBox` animation called in `Game.js`.
7. When one live heart is left on screen animation `headShake` is called in `Game.js`.
8. Changed text color of 'Phrase Hunter' in `overlay` (`#FFFFF`) and in `.header` (`#1E1F26`) in `styles.css`.

Live link: https://kristensilva.github.io/unit4-oop_game-v2/
