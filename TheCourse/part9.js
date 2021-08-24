//1)Use Destructing Assignment to Assign Variables from Objects
var voxel = {x: 3.6, y: 7.6, z:6.54};

//old way of doing it 
var x = voxel.x; //x = 3.6
var y = voxel.y; //y =7.4
var z = voxel.z; //z = 6,54

//new way
const { x: a, y: b, z:c} = voxel; //a =3.6 , b=7.6, c=6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures){
    "use strict";
    const {tomorrow: tempofTomorrow} = avgTemperatures; //get tomorrow variable and assign it to tempofTomorrow from the avgTemperatures objct
    return tempofTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//2)Destructuring assignment with nested Objects
//Nested Object
const Local_FORECAST = {
    today: {min: 72, max: 83}, //nested object
    tomorrow: {min: 73.7, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";
    const {tomorrow: { max: maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(Local_FORECAST));

//Use destructuring assignment to assign variables from arrays 
const [m, n, , s] = [1, 2, 3, 4, 5, 6];
console.log(m, n, s); //????

let p = 8, q = 6;
(() => {
    "use strick";
    [p,q] = [q,p]
})();
console.log(p);
console.log(q);

//3)Use Destructuring Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr] = list; // removes the first two elements

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//4)Use Destructuring Assignment to pass an object as function's parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function () {

    return function half({ max,min }) { //   for us to call only what we need instead of this // return function half(stats){
        return (max + min) / 2.0; //        return (stats.max + stats.min) / 2.0; 
    };

})();
console.log(stats);
console.log(half(stats));

//5)create Strings using Template Literals 
const person = {
    name: "Serge Byusa",
    age: 18
};

//Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; // helps to make multi line strings and you can write on any line and you can add variables

console.log(greeting);


//6)Coding challenge 
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", 'linebreak'],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr){
    const resultDisplayArray = [];
    for(var i=0; i<arr.length; i++){
        //resultDisplayArray [i]= [ `<li class="text-warning"> ${arr} </li>` ];
        resultDisplayArray.push(`<li class="text-warning"> ${arr} </li>` );
    }
    return resultDisplayArray;
}

const resultDisplayArray1 =  makeList(result.failure);
console.log(resultDisplayArray1);








