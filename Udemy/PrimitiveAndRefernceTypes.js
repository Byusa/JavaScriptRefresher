//int, strings and boolean are primitive types
const a = 1;
const b =a;
console.log(a);
console.log(b);

//objects and Arrays are reference types
//A
const person = {
    name: 'Serge'
};

const secondPerson = person;
person.name = 'Ebou';
console.log(secondPerson); // also changed 

//To fix A
const person2 = {
    name: 'Serge'
};
const secondPerson2 = {
    ...person2
};

person2.name = 'Jules';
console.log(secondPerson2);

