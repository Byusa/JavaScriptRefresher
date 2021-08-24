//////////////////////////////////////////////////////////////
/////////////////////////Part5///////////////////////////////
////////////////////////////////////////////////////////////
//iterate with While loop
var myArray = [];

var i = 0;
var sum = 0;
while ( i<5 ){
    myArray.push(i);
    sum +=myArray[i];
    i++;
}
//console.log(myArray);
console.log(sum);
console.log(myArray);

//var myArr  = [2,3,4,5,6];
function mult(myMultArr){
    var pdt = 1; 
    for(var i=0; i<myMultArr.length; i++){
        for(var j=0; j<myMultArr[i].length; j++ ){
             pdt *=myMultArr[i][j]; 
        }
    }
    return pdt;    
}
var myMultArr = [[1,2],[3,4],[2,3,4,5]];

console.log(mult(myMultArr));

var arr = [];
var i = 10;

do {
    arr.push(i);
    i++;
}while (i<5)

console.log(i,arr); 


