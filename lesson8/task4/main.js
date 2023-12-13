class Client {
    constructor(id, firstName, lastName, email, phoneNumber, order) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.order = order;
    }}

let clients = [
    new Client(1, 'John', 'Doe', 'john@example.com', '1234567890', ['Product1', 'Product2', 'Product3']),
    new Client(2, 'Alice', 'Smith', 'alice@example.com', '9876543210', ['Product4', 'Product5']),
    new Client(3, 'Bob', 'Johnson', 'bob@example.com', '5551234567', ['Product6', 'Product7', 'Product8']),
    new Client(4, 'Emily', 'Brown', 'emily@example.com', '7778889990', ['Product9', 'Product10']),
    new Client(5, 'Sarah', 'Williams', 'sarah@example.com', '1112223334', ['Product11', 'Product12']),
    new Client(6, 'Michael', 'Davis', 'michael@example.com', '4445556667', ['Product13', 'Product14', 'Product15']),
    new Client(7, 'Olivia', 'Miller', 'olivia@example.com', '8889990001', ['Product16']),
    new Client(8, 'Daniel', 'Wilson', 'daniel@example.com', '2223334445', ['Product17', 'Product18']),
    new Client(9, 'Sophia', 'Moore', 'sophia@example.com', '6667778889', ['Product19', 'Product20']),
    new Client(10, 'Matthew', 'Taylor', 'matthew@example.com', '3334445556', ['Product21', 'Product22', 'Product23'])
];

console.log(clients);
