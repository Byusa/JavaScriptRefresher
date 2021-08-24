// Easily extract array elements or object properties and store them in variables

//Array destructing
[a,b] = ['Hello', 'Serge']
console.log(a) //Hello
console.log(b) //Serge

const numbers = [1,2,3];
[num1, num2] = numbers; 
console.log(num1, num2); //1,2
[num1, ,num2] = numbers; 
console.log(num1, num2);//1,3


console.log(num1, num2);

//Object Destructing
//{about} = {name: 'Serge', age:28}
//console.log(name);