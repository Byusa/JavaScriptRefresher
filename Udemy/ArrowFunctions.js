//normal function
/*function myFnc(){

}*/

//An arrow function
/*const myFnc = () => {
    //...
}*/
//no more issues with the this Keyword

function printName1(name){
    console.log(name);
}
printName1("Serge with normal function")
const printName2 = (name ) => {
    console.log(name);
}
printName2("Serge with arrow function")