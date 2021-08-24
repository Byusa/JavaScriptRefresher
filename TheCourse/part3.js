
//https://scrimba.com/c/c9BWM2Uy
/////////////////////////////////////////////////////////////
/////////////////////////Part3///////////////////////////////
/////////////////////////////////////////////////////////////
//Objects

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.
//object created
var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": [],
    "the type" : "Hybrid", //with space
    12: "DogsNumber" // using nymbers
    
};

var dName = myDog.name; // first notaion
var dType = myDog["the type"]; // second, dType is set "Hybrid"
console.log(dName+" "+dType);

//using numbers
var num = 12;
var realNum = myDog[num];
console.log(realNum);

//setting properties
myDog.name = "bibo";
console.log(myDog.name);

//add new properties to an object
myDog.bark = "bow-wow";
console.log(myDog.bark);

//deleting a property
delete myDog.bark;

//using object to lookup
// like maps
function phonelookup(val) {
    var res = "";
    
    var lookup = {
        1: "one",
        2: "two",
        3: "",
    };
    res = lookup[val]
    return res;
}

console.log(phonelookup(1) + "sdfhad");

/*//personal
function symbolLook(val){
    var res = " ";
    
    var lookup = {
        "AA" : "A",
        "AB" : "B"
    };
}*/

//Testing obj for properties

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj("name"));

//manupilating complex objects
//an array similar to JSon
var myMusic = [
    {
        "artist" : "MJ",
        "title" : "smoth criminal",
        "release year": "2001",
        "formats": ["CD", "8T", "LP"], 
        "gold": true 
    },
    // Add record here
    {
        "artist" : "CB",
        "title" : "Privacy",
        "release year": "2018",
        "formats": ["YouTube ", "8T", "LP"], 
        "gold": true 
    }
]

//Accessing Nested Objects










