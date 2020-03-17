// Keyboard and Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

//to clear the input section
taskInput.value = '';

//form.addEventListener('submit', runEvent);

// // Key Down
// taskInput.addEventListener('keydown', runEvent);

// // Key Up
// taskInput.addEventListener('keyup', runEvent);

// // key Press
// taskInput.addEventListener('keypress', runEvent);

// // FOCUS
// taskInput.addEventListener('focus', runEvent);

// // Blur
// taskInput.addEventListener('blur', runEvent);

// // Cut
// taskInput.addEventListener('cut', runEvent);

// // Paste
// taskInput.addEventListener('paste', runEvent);

// INPUT
//taskInput.addEventListener('input', runEvent);

// SELECT


function runEvent(e) {
  console.log(`EVENT TYPE : ${e.type}`);

  //console.log(e.target.value);
  
  //heading.innerText = e.target.value ;

  // Get Input Value
  //console.log(taskInput.value);
  // To prevent default behaviour
  //e.preventDefault();
}