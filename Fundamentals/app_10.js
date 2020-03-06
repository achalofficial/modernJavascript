// Dates and Time

let val ;

const today = new Date();
let birthday = new Date('9-10-2019');
birthday = new Date('Sept 10 1981');

val = today.getFullYear();
val = today.getMonth();
val = today.getDay();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

// Time Stamp
val = today.getTime();

//val = today.toString();
//val = birthday;

// Edit the date values
birthday.setDate(2); 
birthday.setMonth(2); // 0 = January
birthday.setFullYear(1985);


//console.log(val);
console.log(birthday);

//console.log(typeof val);

