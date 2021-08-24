//Use Getters and Setters to Control Access to an Object
class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class thermostat{
        //With a constructor
        /*constructor(temp){
            this._temp = temp;//work
            //this._temp = 5/9 * (temp - 32); //his work
        }*/
        //getter
        get temperature(){
           return this._temp;
        }
        //setter
        set temperature(temp){
            this._temp = (temp * 9/5 ) +32;//my work
            //this._temp = celcius; //his work
        }
    }
    return thermostat;
}

const thermostat = makeClass();
const thermos = new thermostat();
//const thermos = new thermostat(76); //His work
let temp = thermos.temperature;
thermos.temperature = 0;
temp = thermos.temperature
console.log(temp);


