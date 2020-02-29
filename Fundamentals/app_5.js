// Number and Math Object 

const num1 = 100 ;
const num2 = 50 ;
let val ;

// Simple Math With Number
val = num1 + num2 ;
val = num1 - num2 ;
val = num1 * num2 ;
val = num1 / num2 ;
val = num1 % num2 ;

//Math Object
val = Math.PI;
val = Math.E ;
val = Math.round(2.69);
//round off up
val = Math.ceil(2.4);
//round off down
val = Math.floor(2.6);
//square Root
val = Math.sqrt(64);
// to get absoulte Number
val = Math.abs(-3);
// to get min and max numbers
val = Math.min(1,2,-4,5,33,4,5);
val = Math.max(1,2,-4,5,33,4,5);
// random function ( Any random number, it keeps on changing on reload)
val = Math.random();
// to get an integer betwen 0 to 19
val = parseInt(Math.random()*20);
// to get an integer
val = Math.floor(Math.random()*20);

console.log(val);
