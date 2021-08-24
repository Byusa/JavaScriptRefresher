//inheritance
class Human {
    constructor(){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}
class Person extends Human{

    //properties
    constructor() {
        super(); //to excute the parent class
        this.name = 'Max';
        //this.gender = 'Female'; // this will print female not male even though the printGender is in Human
    }

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

