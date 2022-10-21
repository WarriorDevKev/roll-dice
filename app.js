/* 1) Get all elements we need in JS
        a) Button: When clicked, something needs to happen
            i) summon a random dice image
            ii) 
            iii) 
        b) move animateHamburgers() inside of toggleNav()
    2) img tag
*/
const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");

// summon a random dice image
function getRandomNum() {
    return 1 + Math.floor(Math.random(".dice__result") *6)
}

function rollDice() {
    diceTriggerEl.addEventListener("click", function() {
        let diceRandomNum = getRandomNum();
        diceImageEl.src = `images/dice${diceRandomNum}.png`;
    })
}

rollDice()