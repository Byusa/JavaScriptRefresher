//////////////////////////////////////////////////////////////
/////////////////////////Part6///////////////////////////////
////////////////////////////////////////////////////////////
//Profile lookup
//KeyValues Pairs
var contacts = [
    {
        "firstName": "Serge",
        "lastName": "Byusa",
        "Number": "4389266506",
        "likes": ["Pizza", "C#andJS", "cookies"]
    },
    {
        "firstName": "Ebou",
        "lastName": "Jobe",
        "Number": "512222333",
        "likes": ["Baggles", "JS", "Allah"]
    },
    {
        "firstName": "Taha",
        "lastName": "Salman",
        "Number": "512999000",
        "likes": ["Chicken", "Python", "Weed"]
    },
    {
        "firstName": "Jules",
        "lastName": "Iyatan",
        "Number": "5127779990",
        "likes": ["Chicken", "webDev", "food"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i<contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
}
var data = lookUpProfile("Jules","Number");
console.log(data);