//Rest (filter)
const filter = (...myargs) => {
    return myargs.filter(el => el === 1); //if element is equalt to 1
}

console.log( filter(1,2,3) );