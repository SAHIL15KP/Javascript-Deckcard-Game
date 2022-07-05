
//  let age =  21
//  if ( age >= 21){
//      console.log("welcome!")

//  }
//  else if (age < 21){
//      console.log("sorry u can't enter the club")
//  }

let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sumel")
let cardEl = document.getElementById("card-el")
console.log(cards)
let player = {
    tag: "Sahil:",
    chips: "$123"
}

let Moneyl = document.getElementById("player-el")
Moneyl.textContent = player.tag + player.chips

function getrandomcard() {
    let randoms = Math.floor(Math.random() * 13) + 1
    if (randoms > 10) {
        return 10
    }
    else if (randoms === 1) {
        return 11
    }
    else {
        return randoms
    }
}

function startgame() {
    isAlive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    sum = firstcard + secondcard
    cards = [firstcard, secondcard]
    rendergame()
}

function rendergame() {

    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do u want to draw a new card"
    } else if (sum === 21) {
        message = "|congrats u won the blackjack|"
        hasBlackjack = true
    } else {
        message = "Oops u lost the game"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum
}

function Newgame() {

    if (isAlive === true && hasBlackjack === false) {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        console.log(cards)
        rendergame()
    }     

}









