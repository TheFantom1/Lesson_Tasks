// Функція для обчислення площі прямокутника
{
    function rectangleArea(a, b) {
        return a * b;
    }

    const sideA = 15;
    const sideB = 20;

    const result = rectangleArea(sideA, sideB);
    console.log("Площа прямокутника: " + result);
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r
{
    function circleArea(r) {
        return Math.PI * r * r;
    }

    const radius = 20;

    const result = circleArea(radius);
    console.log("Площа кола: " + result);
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом r
{
    function cylinderSurfaceArea(r, h) {
        const circleArea = Math.PI * r * r; // Площа верхнього та нижнього основ циліндра
        const sideArea = 2 * Math.PI * r * h; // Площа бічної поверхні циліндра
        return 2 * circleArea + sideArea;
    }

    const radius = 2;
    const height = 16;

    const result = cylinderSurfaceArea(radius, height);
    console.log("Площа циліндра з радіусом 5 і висотою 10: " + result);
}
// створити функцію яка приймає масив та виводить кожен його елемент
{

    function printArrayElements(arr) {
        arr.forEach(element => console.log(element));
    }

    const myArray = [1, 2, 4, 7, 5];

    printArrayElements(myArray);

}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    function createParagraph(text) {
        return `${text}`;
    }

    const myText = "Це текст для параграфу.";

    const paragraph = createParagraph(myText);
    console.log(paragraph);

}

//(Створення ul з трьома елементами li, текст для li заданий через аргумент)
{
    function createListWithThreeItems(text) {
        return `<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`;
    }

    const listWithThreeItems = createListWithThreeItems("Сатана");
    console.log(listWithThreeItems);

}
//(Створення ul з заданою кількістю елементів li, текст для li теж через аргумент)
{
    function createListWithItemCount(text, count) {
        let list = '<ul>';
        for (let i = 0; i < count; i++) {
            list += `<li>${text}</li>`;
        }
        list += '</ul>';
        return list;
    }

    const listWithFiveItems = createListWithItemCount("Чорт", 2);
    console.log(listWithFiveItems);

}
//(Функція для створення списку з примітивних елементів (числа, рядки, булеві))
{
    function createPrimitiveList(arr) {
        let list = '<ul>';
        arr.forEach(element => {
            list += `<li>${element}</li>`;
        });
        list += '</ul>';
        return list;
    }

    const primitiveArray = [50, "Рядок", false, 25, "Ще один рядок"];
    const primitiveList = createPrimitiveList(primitiveArray);
    console.log(primitiveList);

}
//(Функція для виведення об'єктів у документ (для кожного об'єкту окремий блок))
{
    function displayObjects(objects) {
        let blocks = '';
        objects.forEach(obj => {
            blocks += `<div>ID: ${obj.id}, Name: ${obj.name}, Age: ${obj.age}</div>`;
        });
        document.body.innerHTML += blocks;
    }

    const objects = [
        {id: 1, name: "John", age: 30},
        {id: 2, name: "Alice", age: 25},
        {id: 3, name: "Bob", age: 35}
    ];

    displayObjects(objects);

}
//(Функція, що повертає найменше число з масиву)
{
    function findMinNumber(arr) {
        return Math.min(...arr);
    }

    const numbers = [15, 8, 20, 5, 12];
    const minNumber = findMinNumber(numbers);
    console.log("Найменше число з масиву: " + minNumber);

}
//(Функція для сумування елементів масиву чисел)
{
    function sum(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    }

    const numbersToSum = [1, 2, 3, 4, 5];
    const totalSum = sum(numbersToSum);
    console.log("Сума елементів масиву: " + totalSum);

}
//(Функція для обміну значень за індексами у масиві)
{

    function swap(arr, index1, index2) {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }

    const arrToSwap = [11, 22, 33, 44];
    const swappedArr = swap(arrToSwap, 0, 1);
    console.log("Масив після обміну: " + swappedArr);

}
//(Функція обміну валюти)
{
    function exchange(sumUAH, currencyValues, exchangeCurrency) {
        const currency = currencyValues.find(curr => curr.currency === exchangeCurrency);
        if (currency) {
            return sumUAH / currency.value;
        } else {
            return "Currency not found!";
        }
    }

    const exchangeResult = exchange(202020200, [
        {currency: 'USD', value: 40},
        {currency: 'EUR', value: 42}
    ], 'EUR');
    console.log("Результат обміну валюти: " + exchangeResult);

}