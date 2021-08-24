"use strict";
//generate random fraction
var randomFraction = Math.random();//btwn 0 and <1
var randombtwn0and19 = Math.floor(Math.random() * 20);
var random0and10 = Math.floor(Math.random() * 10);
function randonRange(min,max){
    return  Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(randonRange(18,25));

//parseInt 
function convertToInteger(myst){
    return parseInt(myst);
}
console.log(convertToInteger("75"));

//parseInt with radix
function convertToIntegerWithRadix(str){
    return parseInt(str,2);
}
console.log(convertToIntegerWithRadix("101011"));

//Use the conditional (Ternary) Operator
function checkwithTernaryOP(a,b){
    return a<=b ? true : false;
}
console.log(checkwithTernaryOP(1,2));

//Use multiple conditional (Ternary) Operator
function checkSign(num){
    return num > 0 ? "Positive" : num <0 ? "Negative" : "zero"
}
console.log(checkSign(-1));

//difference between var and let;
//let won't let make you create a variable name twice

let catName = ""; //always use let 
function Thestrict(){
    "use strict"; //catches coding mistakes like unused variables unsave action   
    //you can put it at the begining of the file 
}

Thestrict();

//Compare scope of let and var
//var is gloabal
//let is only limitted to the scope

function letVar(num){
    if(num>0){
        var s="here";
        console.log(s);
    }
    console.log(s); //////which is stupid Use, just use let always
}
letVar(10);

//Declare a Read-Only variable with the const keyword
function printManyTimes(str){
    const SENTENCE = "and" + str;
    console.log("You should use const for something you are not gonna change at all (reassing)" + SENTENCE);
}
printManyTimes("declare capital letter");

//Mutate an Array declared with const
const S = [5,7, 2];
function editInPlace(s){
    //s = [9,5,4] //this is npt applicable
    S[0] = 2;
    S[1] = 5;
    S[2] = 8;
    return S;
}
console.log(editInPlace(S)); // This is how you reassign the const array

//Prevent Object mutation 
//The above won't make the constant non mutable 
//To make const mutable, you just have to Freez it

function freezeObj(){
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); //we freeze the constant here
    try {
        MATH_CONSTANTS.PI = 99;
    }catch (ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI); // PI stayed the same 

