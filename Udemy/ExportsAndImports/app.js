//1)defualt export
import person from './person.js'
// you can name it anything you want cause you named it as default (prs)
import prs from './person.js' 

//2)Named export
import { baseData } from './utility'
import { clean } from './utility'

//3) 
import { clean as cleanPerson } from './utility'
import * as bundle from './utility'

/*const app = () => {
    console.log(person.name);
}
console.log(app());

export default app;*/