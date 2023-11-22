let array = [1, 'two', true, { key: 'value' }, ['nested', 'array'], null, undefined, 5.5, false, { anotherKey: 'anotherValue' }];

console.log("Елементи масиву:");
array.forEach(element => console.log(element));

let book1 = {
    title: 'The Lord of the Rings',
    pageCount: 1178,
    genre: 'Fantasy'
};

let book2 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian Fiction'
};

let book3 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 309,
    genre: 'Fantasy'
};

console.log("Книги без авторів:");
console.log(book1);
console.log(book2);
console.log(book3);

let author1 = { name: 'J.R.R. Tolkien', age: 81 };
let author2 = { name: 'George Orwell', age: 46 };
let author3 = { name: 'J.K. Rowling', age: 56 };

let bookWithAuthors1 = {
    title: 'The Lord of the Rings',
    pageCount: 1178,
    genre: 'Fantasy',
    authors: [author1]
};

let bookWithAuthors2 = {
    title: '1984',
    pageCount: 328,
    genre: 'Dystopian Fiction',
    authors: [author2]
};

let bookWithAuthors3 = {
    title: 'Harry Potter and the Philosopher\'s Stone',
    pageCount: 309,
    genre: 'Fantasy',
    authors: [author3]
};

console.log("Книги з авторами:");
console.log(bookWithAuthors1);
console.log(bookWithAuthors2);
console.log(bookWithAuthors3);

let users = [
    { name: 'Alice', username: 'alice23', password: 'pass1234' },
    { name: 'Bob', username: 'bob87', password: 'bobPassword' },
    { name: 'Charlie', username: 'charlie01', password: 'mySecretPwd' },
    { name: 'David', username: 'david99', password: 'davie123' },
    { name: 'Eva', username: 'eva_g', password: 'evaPassw0rd' },
    { name: 'Frank', username: 'frankie', password: 'frankPass' },
    { name: 'Grace', username: 'gracey', password: 'gracefulPwd' },
    { name: 'Helen', username: 'helen_78', password: 'helenPass123' },
    { name: 'Ivy', username: 'ivy_i', password: 'ivyPassword' },
    { name: 'Jack', username: 'jackjack', password: 'jackPwd' }
];

console.log("Паролі користувачів:");
users.forEach(user => console.log(user.password));