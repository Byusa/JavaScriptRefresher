// javascript
//OptShiftF
var num = 5;
let b =3;//only works in a scope
 console.log(b); //helps you to see things in the console
var sent = "hey\" this";
var sent1 = 'hey\ this';
  console.log(sent1);
  console.log(sent1[4]);
  var count = sent1.length;
console.log(count);
function words( word, noun){
    var ans= word +" "+ noun;
    return ans;
}
console.log(words("Money","I"))
 /*jhkj*/
//Arrays

var arr = ["byusa", 1];
var nestedArray = [["Byusa", 1],["Serge", 2]];

nestedArray.push(["Jabo",7]); //adding an element in the array at the end
console.log(nestedArray)

var lastElement = nestedArray.pop(); //remove last element
console.log(lastElement)
console.log(nestedArray) // size is smaller now

var firstElement = nestedArray.shift();
console.log(firstElement) // remove the first element in the array
console.log(nestedArray) // size is smaller now

nestedArray.unshift(["bibo",0]); //addfirst (add at the beginning)
console.log(nestedArray) // size is bigger

if( typeof gl == "undefined"){ // checking if a variable is defined
   console.log("not known") 
}





