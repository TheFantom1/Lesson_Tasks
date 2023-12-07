/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool' */
const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];

const lengths = strings.map(str => str.length);
console.log(lengths);
/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/
const upperCaseStrings = strings.map(str => str.toUpperCase());
console.log(upperCaseStrings);
/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
const lowerCaseStrings = upperCaseStrings.map(str => str.toLowerCase());
console.log(lowerCaseStrings);
/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів. */
let dirtyString = ' dirty string                            ';
dirtyString = dirtyString.trim();
console.log(dirtyString);

