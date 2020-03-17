// Local and Session Storage
/*
    + Local Stays forever untill we dont clear it up
    + Session storage stays unitll we close our browser
*/

// set local storage Item
// localStorage.setItem('name','john');
// localStorage.setItem('age','50');

// // set session storage Item
// sessionStorage.setItem('name','beth');

// // remove from storage
// localStorage.removeItem('name');

// // get from stroage
// const name = localStorage.getItem('name');
// const name = localStorage.getItem('age');

// // Clear Local Storage
// localStorage.clear();

// console.log(name);

document.querySelector('form').addEventListener('submit', function (e) {
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null ){
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Task Saved'); 
    e.preventDefault();  
})

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(tasks) {
  console.log(task);
});
