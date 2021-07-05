// let, const 
// const can be declared only once 
//  tip : alway use const unless you know you'll reassign the value 

// let age = 30;
// age =31 
// console.log(age);

// const age = 30;
// console.log(age);

let score;
score = 10;
console.log(score);


// string, numbers, boolean, null, undefined 

const firstname = 'John';
const age = 30;

// concatenation
console.log('my name is ' + firstname + ' and I am ' + age);


// string interpolation
console.log(`my name is ${firstname} and I am ${age}`);


const s = 'hello world';

console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());

// split by letter
console.log(s.split(''));

// split by word 
const t = 'technology, computers, it, code';
console.log(t.split(', '));

// ARRAYS - variables that hold multiple values 

/*multi
line
comment */

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];

// add at the end
fruits.push('mangos')

// add at the beginning 
fruits.unshift('strawberries');

// remove 
fruits.pop('mangos');

// check if something is in the array 
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

// index of a value
console.log(fruits.indexOf('oranges'));


// array is 0 based 
console.log(fruits);


// OBJECT LITERALS 
// key value pairs 

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

// you can log more than 1 thing using a coma 
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city } } = person;
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person);


const todos = [
    {
        id: 1,
        todo: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        todo: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        todo: 'dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].todo);


// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// LOOPS

// for 
for (let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(`For Loop Number: $(i)`);
}

let i = 0;
while (i < 10) {
    console.log(`While Loop Number`);
    i++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].todo);
}

for (let sth of todos) {
    console.log(sth.id);
}


// forEach, map, filter
todos.forEach(function (sth) {
    console.log(sth.todo);
});

const sthTodo = todos.map(function (sth) {
    return sth.todo
});
console.log(sthTodo);


const sthCompleted = todos.filter(function (sth) {
    return sth.isCompleted === true;
});

console.log(sthCompleted);


//   CONDITIONALS

// const x = '10';

// if(x == 10) {
//  console.log('x is 10');   


// if ... else 
// const x = 1;

// if(x ) {
//  console.log('x is 10');   
// } 
// else if(x > 10) {
//     console.log('x is greater than 10');
// }
// else {
//     console.log('x is less than 10');
// }


//  OR || = 1 has to be true 
// const x = 4;
// const y = 11;

// if(x > 5 || y > 10) {
//  console.log('x is more than 5 or y is more than 10');   
// } 

//  AND && = both has to be true 
const x = 6;
const y = 11;

if (x > 5 && y > 10) {
    console.log('x is more than 5 and y is more than 10');
}



var c = 10;
var c = 3;
var color = c > 10 ? 'red' : 'blue';
var color = 'green';
console.log(color);


// SWITCH 
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
