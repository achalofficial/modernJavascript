// String method and Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 23 ;
const str = 'hello my name is jack';
const tag = 'web,web design , web dev';

let val ;

// premitive concatenation
val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName ;

// append
val = 'brad';
val += 'traversy'

val = 'Hello, My name is ' + firstName + ' and I am ' + age ;

// Escaping
val = 'That\'s awesome, I can\'t wait '; 

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// toUpper and toLower - change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// index of character ( the indexing start from 0 )
val = firstName.indexOf('l');
val = lastName.lastIndexOf('l');

// chatAt()
val = firstName.charAt(2);

// Get last character 
val = firstName.charAt(firstName.length - 1);

// pull a sub string ()
val = firstName.substring(0,4);

// slice
val = firstName.slice(0,4);
val = firstName.slice(-3); // from the back

// split
val = str.split(' ');
val = tag.split(',')

// replace 
val = str.replace('jack','bob');

// includes()
val = str.includes('hello'); // case sensitive





 console.log(val);