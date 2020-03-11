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

taskTitle.textContent = 'Task List ( Variable Use)';

