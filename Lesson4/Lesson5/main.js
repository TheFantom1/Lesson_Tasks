// Функція для обчислення площі прямокутника
{
    let rectangleArea = (a, b) =>  a * b;

    let result = rectangleArea (15,20)
    console.log(result);
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    let circleArea = (r) => Math.PI * r * r;

    let result = circleArea (15)
    console.log(result);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
{
    let cylinderSurfaceArea = (r, h) => {
        let circleArea = Math.PI * r * r;
        let sideArea = 2 * Math.PI * r * h;
        return 2 * circleArea + sideArea;
    }

    const radius = 2;
    const height = 16;

    const result = cylinderSurfaceArea(radius, height);
    console.log("Площа циліндра: " + result);
}
// створити функцію яка приймає масив та виводить кожен його елемент
const printArrayElements = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

const myArray = [1, 2, 4, 7, 5];

printArrayElements(myArray);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const createParagraph = text => `${text}`;

const myText = "Це текст для параграфу.";

const paragraph = createParagraph(myText);
console.log(paragraph);


//(Створення ul з трьома елементами li, текст для li заданий через аргумент)
const createListWithThreeItems = text => {
    let items = '';
    for (let i = 0; i < 3; i++) {
        items += `<li>${text}</li>`;
    }
    return `<ul>${items}</ul>`;
};

const listWithThreeItems = createListWithThreeItems("Сатана");
console.log(listWithThreeItems);


//(Створення ul з заданою кількістю елементів li, текст для li теж через аргумент)
const createListWithItemCount = (text, count) => {
    let list = '<ul>';
    for (let i = 0; i < count; i++) {
        list += `<li>${text}</li>`;
    }
    list += '</ul>';
    return list;
};

const listWithFiveItems = createListWithItemCount("Чорт", 2);
console.log(listWithFiveItems);

//(Функція для створення списку з примітивних елементів (числа, рядки, булеві))
const createPrimitiveList = arr => {
    let list = '<ul>';
    list += arr.map(element => `<li>${element}</li>`).join('');
    list += '</ul>';
    return list;
};

const primitiveArray = [50, "Рядок", false, 25, "Ще один рядок"];
const primitiveList = createPrimitiveList(primitiveArray);
console.log(primitiveList);

//(Функція для виведення об'єктів у документ (для кожного об'єкту окремий блок))
const displayObjects = objects => {
    const blocks = objects.map(obj => `<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`).join('');
    document.body.innerHTML += blocks;
};

const objects = [
    {id: 1, name: "John", age: 30},
    {id: 2, name: "Alice", age: 25},
    {id: 3, name: "Bob", age: 35}
];

displayObjects(objects);

//(Функція, що повертає найменше число з масиву)
const findMinNumber = arr => Math.min(...arr);

const numbers = [15, 8, 20, 5, 12];
const minNumber = findMinNumber(numbers);
console.log("Найменше число з масиву: " + minNumber);

//(Функція для сумування елементів масиву чисел)
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

const numbersToSum = [1, 2, 3, 4, 5];
const totalSum = sum(numbersToSum);
console.log("Сума елементів масиву: " + totalSum);

//(Функція для обміну значень за індексами у масиві)
const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};

const arrToSwap = [11, 22, 33, 44];
const swappedArr = swap(arrToSwap, 0, 1);
console.log("Масив після обміну: " + swappedArr);

//(Функція обміну валюти)
const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    const currency = currencyValues.find(curr => curr.currency === exchangeCurrency);
    return currency ? sumUAH / currency.value : "Currency not found!";
};

const exchangeResult = exchange(202020200, [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
], 'EUR');
console.log("Результат обміну валюти: " + exchangeResult);