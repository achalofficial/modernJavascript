// // Query Selector for Multiple Elements
// // document.getElementsBy ClassName

// // const items = document.getElementsByClassName('collection-item');

// // console.log(items);
// // console.log(items[0]);

// // items[0].style.color = 'red';
// // items[3].textContent = 'Hello';

// // We can attach the getElemetsByClassName to elements rather than adding it globally
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// //document.getElementByTagname
// let items = document.getElementsByTagName('li');

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello'

// // Convert the HTML Collection into array
// items = Array.from(items);

// //items.reverse();

// items.forEach(function(item, index){
//   console.log(item)
//   item.textContent = `${index}: Hello`;
// });

// console.log(items);

// Query Selector All

const items = document.querySelectorAll('ul.collection li.collection-item');
// We can put any kind of CSS Selector just like JQuery
console.log(items);

items.forEach(function(item, index){
  console.log(item)
  item.textContent = `${index}: Hello`;
});

const liEven = document.querySelectorAll('li:nth-child(Even)');
const liOdd = document.querySelectorAll('li:nth-child(Odd)');


liEven.forEach(function(li,index){
  li.style.background = "#ccc";
});

for (let i = 0 ; i < liOdd.length; ++i){
    liOdd[i].style.background = "#f4f4f4";
}

// For loop will work on HTML collection since we can use the Length Property