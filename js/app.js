/*
 * Create a list that holds all of your cards
 */
 const cards = document.querySelectorAll(".card");
 let toggledCards = [];
/* 
 * Set up the event listener for a card.
 */

var deck = document.querySelector('.deck');

deck.addEventListener('click', event => {
	const clickTarget = event.target;
	if (
		clickTarget.classList.contains('card') &&
		!clickTarget.classList.contains('match') && 
		toggledCards.length < 2 && 
		!toggledCards.includes(clickTarget)
		) {
		toggleCard(clickTarget);
		addToggleCard(clickTarget);
		if (toggledCards.length === 2) {
			matchCheck();
		}
	}
});

/* 
 * If a card is clicked, display the card's symbol (put this functionality in another function that you call from this one).
 */

 function toggleCard(clickTarget) {
 	clickTarget.classList.toggle('open');
 	clickTarget.classList.toggle('show');
 }

 /*
  * If a card is clicked, add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
  */

  function addToggleCard(clickTarget) {
  	toggledCards.push(clickTarget);
  }

 /*
  * If the list already has another card, check to see if the two cards match
  */

  function matchCheck() {
  	const first_card = toggledCards[0].children[0].className;
  	const second_card = toggledCards[1].children[0].className;

  	if (first_card === second_card) {
  		toggledCards[0].classList.toggle('match');
  		toggledCards[1].classList.toggle('match');
  		toggledCards = [];
  		} else {
	  		setTimeout(() => {
		  		toggleCard(toggledCards[0]);
		  		toggleCard(toggledCards[1]);
		  		toggledCards = [];
	  		}, 1000);
  		}

  }
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



/*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
