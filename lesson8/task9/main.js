/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.*/
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

let foundCinderella;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].footSize === prince.foundShoe) {
        foundCinderella = cinderellas[i];
        break;
    }
}

console.log(foundCinderella);