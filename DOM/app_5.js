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

// Create a New Link Element
const link = document.createElement('a');

// Add Class Name
link.className ='delete-item secondary-content';

//Add Icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link to li
li.appendChild(link);


// Append li to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);
