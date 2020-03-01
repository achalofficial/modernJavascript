// Template Literals

/*
  +  Template Literals or Template strings are the HTML Snippets which are used during JS Progamming to add HTML elements in the code.
*/

const name = 'john';
const age = 30 ;
const job = 'Web Developer';
const city = 'New Delhi';

// Without Template String ( ES5 Way)
html = '<ul><li> Name  : ' + name + '</li><li> Age : ' + age + '</li><li> Job :'+ job + '</li><li> City :' + city + '</li></ul>';

// With Template Strings ( ES6 )
function Hello (){
  return 'Hello';
}

html = `
    <ul>
      <li>Name : ${name}</lt>
      <li>Age : ${age}</lt>
      <li>Job : ${job}</lt>
      <li>City : ${city}</lt>
      <li>${2+2}</lt>
      <li>${Hello()}</lt>
      <li>${age > 30 ? 'Over 30' : 'Under 30'}</lt>
    </ul>
`

document.body.innerHTML = html ;