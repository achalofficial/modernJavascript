// Creating the Elements

const li = document.createElement('li');

//Add Class
li.className = 'collection-item';

//Add ID
li.id = 'new-item';

//Add Attribute
li.setAttribute('title','New Item');

//Create Text Node and Append
const newTextNode = document.createTextNode('Hello World');
li.appendChild(newTextNode);

// Append li to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);
