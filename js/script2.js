// Functions default value e.g:-

// Fat arrow function
// define
var addTwoNumber=(x,y=50)=>{ // x and y is a formal argument but y=50 is a default value.
    // function body
    // every function return somethig
    return x + y;
}
// invoke
let result = addTwoNumber(30);

console.log(result);

// Define Global Variable
var car = "TATA";

// define function
let myCar=()=>{
    // function body
    // Variable define inside a function is a Loacal Variable.
    let car2 = 'Audi';
}
// call
myCar();
console.log(car2);
console.log(car);