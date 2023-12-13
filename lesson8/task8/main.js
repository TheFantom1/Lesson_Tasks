/*Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Cindy1', 20, 31),
    new Cinderella('Cindy2', 22, 32),
    new Cinderella('Cindy3', 19, 33),
    new Cinderella('Cindy4', 21, 34),
    new Cinderella('Cindy5', 23, 35),
    new Cinderella('Cindy6', 20, 36),
    new Cinderella('Cindy7', 25, 37),
    new Cinderella('Cindy8', 18, 38),
    new Cinderella('Cindy9', 22, 39),
    new Cinderella('Cindy10', 24, 40)
];

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

let prince = new Prince('Prince Charming', 25, 36);

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);

console.log(foundCinderella);