/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let prop in this) {
            if (typeof this[prop] !== 'function') {
                console.log(`${prop} - ${this[prop]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let myCar = new Car('X5', 'BMW', 2020, 250, '3.0L');
myCar.drive();

myCar.info();

myCar.increaseMaxSpeed(20);
console.log(myCar.maxSpeed);

myCar.changeYear(2024);
console.log(myCar.year);

myCar.addDriver({ name: 'John', age: 30, license: 'A' });
console.log(myCar.driver);

