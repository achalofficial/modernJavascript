// Define our UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

// Load all Event Listeners
function loadEventListeners(){
  // add Task Events
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {  
  if(taskInput.value === ''){
    alert('Add a Task');
  }

  // Create a Li Element 
  const li = document.createElement('li');
  // Add Class
  li.className = 'collection-item';
  //text node and append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add a Class
  link.className = 'delete-item secondary-content';
  // Icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Appent to li
  li.appendChild(link);

  console.log(li);
  

  e.preventDefault();
}