//1)a)Write concise object literal declarations using simple fields
//creates an object with these properties 
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age, 
        gender: gender
    };
};
console.log(createPerson("Serge Byusa", 26, "Male"));

//1)B)a better way to do 1)a)
const createPerson2 = (name, age, gender) => ({ name, age, gender});
console.log(createPerson2("Serge Byusa", 26, "Male"));

//2)A Write concise declarative functions
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

//2)B) a better way to write 2 A
const bicycle2 = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle2.setGear(3);
console.log(bicycle2.gear);

//3)A) Use class syntax to Define a constructor function
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

//3)B) a better way to do A)
class SpaceShuttle2 {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}

var zeus2 = new SpaceShuttle2('Jupiter');
console.log(zeus2.targetPlanet)

//4)
function makeClass(){
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('Carrot');
console.log(carrot.name);



