
//////////////////////////////////////////////////////////////
/////////////////////////Part4///////////////////////////////
/////////////////////////////////////////////////////////////
//Objects Continuation
//Accessing Nested Objects
var myStorage = {
    "car" : {
        "inside" : {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside":{
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

//Accessing nested arrays
//We have two objects in the array
var myPlants =[
    {
        type: "flowers",
        list: [ "rose", "tilt", "dandelion" ]
    },
    {
        type: "flowers",
        list: [ "fir", "pine", "birch" ]
    }
];

var secondTree = myPlants[1].list[2];

console.log(secondTree);


//Record collection
//setting the jason file
var collection = {
    "0001" : {
        "album": "Indigo",
        "artist": "CB",
        "tracks": ["No guidance" , "heat", "Freaky Friday"]
    },
    "0002" : {
        "album": "Smoth Criminal",
        "artist": "Mj",
        "tracks": ["Rock my world" , "Beat it", "Thriller"]
    },
    "0003" : {
        "album": "The blue print",
        "artist": "JayZ",
        //"tracks": ["The Ruler is back" , "Takeover", "Izzo"]
    },    
}

//
    //Making a copy of the original object before we change anythihg
var collectionCopy = JSON.parse(JSON.stringify(collection))

function updateRecords(id, prop, value) {
    if (value == ""){
        delete collection[id][prop];
    } else if (prop =="tracks"){
        //if it aleady exist set it to itself or make it empty
        collection[id][prop] = collection[id][prop]  || [] ; 
        collection[id][prop].push(value);
    } else{
        collection[id][prop] = value;
    }
    return collection;
}
//console.log(updateRecords("0001", "tracks", "test")); //changing the value of track
//console.log(updateRecords("0002", "artist", "Eminem"));
console.log(collectionCopy);

