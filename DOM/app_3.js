// Query Selector for Multiple Elements
// document.getElementsBy ClassName

const items = document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);

items[0].style.color = 'red';
items[3].textContent = 'Hello';

// We can attach the getElemetsByClassName to elements rather than adding it globally
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


