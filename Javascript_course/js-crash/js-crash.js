// let, const 
// const can be declared only once 
//  tip : alway use const unless you know you'll reassign the value 

// let age = 30;
// age =31 
// console.log(age);

// const age = 30;
// console.log(age);

let score ;
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

const numbers = new Array(1,2,3,4,5);
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

const { firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(city);

person.email = 'john@gmail.com';
console.log(person);


