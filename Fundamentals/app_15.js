// A look at Window Object
// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
//window.alert('HEllo World');
//alert('Without Window');

// PROMPT
//const input = prompt();
//alert(input);

//Confirm
// if(confirm('Are you sure ?')){
//   console.log('Deleted');
// }

// Properties
let val ;

//Outer Height and Width
val = window.outerHeight;
val = window.outerWidth;

//INner Height and Width
val = window.innerHeight;
val = window.innerWidth;

// Scroll Points
val = window.scrollY; // Vertical Axis
val = window.scrollX; // Horizontal Axis

// Location Object
val = window.location;
val = window.location.host;
val = window.location.pathname;
val = window.location.port;
val = window.location.hash;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();
//HIstory
// window.history.go(-1); // for specific Page
// val = window.history.length;

// Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
