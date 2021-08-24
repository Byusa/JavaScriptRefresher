//Use arrow functions to write concise anonymous Functions
var magic = function (){
    return new Date();
};

var magic2 = () => {
    return new Date();
}
//1)the magic is here
var magic3 = () => new Date(); ////////////////////////////
//To make it cooler we  use const
const magic4 = () => new Date();

console.log(magic4());

//eg 2
//2)Write Arrow Functions with parameters
const myConcat = function (arr1, arr2){
    return arr1.concat(arr2);
}; 
//same as
const myConcat2 = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat2([1,2],[3,4,5]));


//3)Write high order functions arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x) ;
    return squaredIntegers;
}

console.log(squareList(realNumberArray));

//4)Write higher order Arrow Functions
const increment  = (function () {
    return function increment(number, value =1) {
        return number  + value;
    }
})();
// You can call it in one of these ways
console.log(increment(3,9));
console.log(increment(3)); //3 will be added to one in this case

//5)a)Use the Rest Operator with Function Parameters
const  sum = (function () {
    return function sum(x, y, z) {
        const args = [ x, y, z ];
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1,2,3));

//5)b)Same as before but This is much better case we can have an number of arguments
const  sum2 = (function () {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum2(1,2,3,4,5));

//6) Use the Spred operator to Evaluate Arrays In Place
//6)A) Same as Rest operator but takes an array

const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
let arr2;
(function () {
    //arr2 = arr1; //that's what you get[ 'Potato', 'Feb', 'Mar', 'Apr', 'May' ]
    arr2 = [...arr1]; //You keep the copy and do overwrite
    arr1[0] = 'Potato'
})();
console.log(arr2);





