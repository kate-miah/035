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

const newUser = {
    firstName: 'Joe',
    lastName: 'Doe',
    age: 18,
    email: 'joe@u.idsa',
    favoriteFilm: "It"
}

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);
// console.log(user.email);
// console.log(favoriteFilm);

/*
let key = 'firstName';
console.log(newUser[key]);
key = 'lastName';
console.log(newUser[key]);
key = 'age';
console.log(newUser[key]);
key = 'email';
console.log(newUser[key]);
key = 'favoriteFilm';
console.log(newUser[key]);
*/
for (const key in newUser) {
   console.log(`${key}:`, newUser[key]);
}


let obj1 = {
    a: 1,
    b: 'hello',
    v: true,
    c: 10,
    d: 28
}
 function sum(obj1) {
    let sum = 0;
    for (const key in obj1) {
        if(typeof obj1[key] === 'number') {
            sum += obj1[key];
        }
    }
    return sum
 }
sum(obj1)


function getPlan() {
    const weekPlan = {
    Mon: 'go to work',
    Tue: 'friend party',
    Wed: 'dantist',
    Thu: 'homework',
    Fri: 'walk to the park',
    Sat: 'liein bed'
}
    let askUser = prompt('Який день тижня вас цикавить: Mon, Tue, Wed, Thu, Fri or Sat?');
    alert(weekPlan[askUser] || 'Nothing planned')
}