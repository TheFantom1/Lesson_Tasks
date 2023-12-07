/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/
function stringToarray(str) {
    return str.split(' ');
}
const str = 'Ревуть воли як ясла повні';
const arr = stringToarray(str);
console.log(arr);
/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);
/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/
function sortNums(nums, direction) {
    const numsCopy = nums.slice(); // Створення копії масиву

    if (direction === 'ascending') {
        return numsCopy.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return numsCopy.sort((a, b) => b - a);
    }
}

const nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

