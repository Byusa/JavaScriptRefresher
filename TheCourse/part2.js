//////////////////////////////////////////////////////////////
/////////////////////////Part2///////////////////////////////
/////////////////////////////////////////////////////////////
//Stand in line
//Queue

function nextInLine(arr, item){
    //
    arr.push(item); //add last 
    return arr.shift();//return first item
}

var testArr =  [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:" + JSON.stringify(testArr));
//boolean
//if statemenents
//Comparison comparator ==
function comparator(a,b){
    if(a==b) return true
    if(a===b) return false//strict equator false
    //applies != and !==
    return ;
}
console.log(comparator(10,"10"));

//Switch Statements
function switchStatment(val){
    var ans="";
    switch(val){
       case 1:
        ans ="one";
        break;
       case 2:
        ans = "two"
        break;
       default:
        ans ="Bigger than 3"  
        break;
    }
    return ans;
}
console.log(switchStatment(1));

function switchStatmentNoBreak2(val){
    var ans="";
    switch(val){
       case 1:
       case 2:
       case 3:
       case 4:
        ans ="below 5";
        break;
       case 6:
       case 7:
       case 8:
       case 9:
        ans = "Above 5 below 10"
        break;
       default:
        ans ="No single digit"  
    }
    return ans;
}

console.log(switchStatmentNoBreak2(1));

function trics(a,b){
    if(a==0) return undefined;
    return a>b;
}

console.log(trics(0,2));

var count =0;

function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "A":
            count --;
            break;
    }
    var holdbet = 'hold'
    if(count >0){
        holdbet
    }
    return count;
}

cc(2); cc(3); cc(4); cc(3); cc("J");

console.log(cc("K"));