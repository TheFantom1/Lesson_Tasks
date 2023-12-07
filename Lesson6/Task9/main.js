/*описати колоду карт (від 6 до туза без джокерів)*/
const deck = [];
const suits = ['spade', 'heart', 'diamond', 'club'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];


for (const suit of suits) {
    for (const value of values) {
        deck.push({ cardSuit: suit, value: value });


        if (suit === 'spade' || suit === 'club') {
            deck[deck.length - 1].color = 'black';
        } else {
            deck[deck.length - 1].color = 'red';
        }
    }
}

console.log(deck);
/*- знайти піковий туз*/
const spadesAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(spadesAce);
/* - всі шістки*/
const sixes = deck.filter(card => card.value === '6');
console.log(sixes);
/*- всі червоні карти*/
const redCards = deck.filter(card => card.color === 'red');
console.log(redCards);
/*- всі буби*/
const diamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);
/*- всі трефи від 9 та більше*/
const higherThanEightClubs = deck.filter(card => card.cardSuit === 'club' && values.indexOf(card.value) >= values.indexOf('9'));
console.log(higherThanEightClubs);
/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/
const cardsBySuit = deck.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, { spade: [], heart: [], diamond: [], club: [] });

console.log(cardsBySuit);