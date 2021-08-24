//SpreadOperator
const numbers = [1, 2, 3];
const newNumbers = [numbers, 4];
const newNumbersWithSpread = [...numbers, 4];

//check the difference
console.log(newNumbers);
console.log(newNumbersWithSpread);

const person = {
    name: 'Serge'
};

const newPerson = {
    ...person,
    age:26
}

console.log(newPerson);