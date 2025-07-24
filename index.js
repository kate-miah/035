let cup = {
    color: 'green',
    volume: '250 ml',
    form: 'bowl'
}
let prop1 = 'color';
let prop2 = 'volume';
let prop3 = 'form';
console.log(cup[prop1]);
console.log(cup[prop2]);
console.log(cup[prop3]);



// Таблиця множення 2 і 3

for (let i = 2; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j}`)
    }
        
    }
/*
function sayHello(name, lastName, age) {
    let hello = '';
    if (age >5 && age < 18) {
        hello = 'Hi'
    } else if (age > 18 && age < 30) {
        hello = 'Hello'
    } else {
        hello = 'Good Day'
    }
    console.log(`${hello}, ${name} ${lastName}`);
}

    let user = {
        name: 'John',
        lastName: 'Doe',
        age: 20
    }
sayHello(user.name, user.lastName, user.age);
*/

// або

function sayHello(user) {
    let hello = '';
    if (user.age >5 && user.age < 18) {
        hello = 'Hi'
    } else if (user.age > 18 && user.age < 30) {
        hello = 'Hello'
    } else {
        hello = 'Good Day'
    }
    console.log(`${hello}, ${user.name} ${user.lastName}`);
}

    let user = {
        name: 'John',
        lastName: 'Doe',
        age: 20
    }
sayHello(user);


// const

let a = 5;
a = 10;

const b = 10;
// b = 15; //TypeError: Assignment to constant variable.
const obj = {
    a: 'value'
}