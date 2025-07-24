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