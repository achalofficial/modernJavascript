// DOM Selectors

// get element by ID
console.log(document.getElementById('task-title'))

//get things from the elements
console.log(document.getElementById('task-title').id);

//change styling 
//document.getElementById('task-title').style.backgroundColor = '#224466';

//IF you wish to hide something from the document
//document.getElementById('task-title').style.display = 'none';

// Change the Content
document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innertext = 'Task List 2';
//document.getElementById('task-title').innerHTML = "<h5>Inner HTML Inserted</h5>";

/*
    + Doing getElementby ID is not efficient 
    + We find another way of doing this
    + We declear a variable and use that variable everywhere
*/

const taskTitle = document.getElementById('task-title');

//taskTitle.textContent = 'Task List ( Variable Use)';

// document.query Selector()
/*
    + This is used as JQuery Selector
    + We can select Elements by ID or Class or element type ( H5 )
    + if there are many elements of the same type then the first element is taken care into.
    + We can also do sub classes and nested classes or elements
    + to select the class in between, we can use CSS3 Sub classes like last-child and nth-child(<number>)
    + for the nth-child: we can do odd and even too but only first odd and first even
*/

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';

document.querySelector('li:nth-child(4)').textContent = 'Hello World';
