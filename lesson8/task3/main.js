/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(name, age, surname, email, phone, id) {
    this.name = name;
    this.age = age;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.id = id;
}

let users = [
    new User('asdg', 1234, 'rgrgrgr', '@annadsa', 212311238, 2),
    new User('asdfd', 1235, 'rgrgrgr', '@annadsa', 2812321, 1),
    new User('asdfh', 1236, 'rgrgrgr', '@annafads', 2123128, 3),
    new User('asdhfg', 1237, 'rgrgrgr', '@annadsaf', 21231238, 5),
    new User('asdhfdg', 1283, 'rgrgrgr', '@annfdsgfda', 281231231, 4),
    new User('asdgfd', 1293, 'rgrgrgr', '@annafdshggf', 281231321, 6),
    new User('asdfgd', 1203, 'rgrgrgr', '@annfgdhgfa', 2812312321, 7),
    new User('asdffgd', 1213, 'rgrgrgr', '@annhfghdfa', 2213231, 8),
    new User('asdgdfgd', 1223, 'rgrgrgr', '@annghfdgfa', 28231231, 10),
    new User('asdfdgdf', 1323, 'rgrgrgr', '@annghdgfda', 2823123, 9)
];
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
users.sort((a, b) => a.id - b.id);

console.log(users);