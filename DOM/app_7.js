// // Event Listeners and Event Objects

// document.querySelector('.clear-tasks').addEventListener('click', function(e) { // e is the event object
//   console.log('Hello World');
//   // to prevent default behave
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

function onClick(e){
  //console.log('Clicked');

   let val ;

   val = e ;

   // Elemnt or Event Target
   val = e.target;
   val = e.target.className;
   val = e.target.classList;

   //e.target.innerText = 'Hello';

    // Event Type
    val = e.type ;

    // TimeStamp
    val = e.timeStamp ;

    // Coordinate event relative to the window
    val = e.clientY;
    val = e.clientX;

    // Coordinate event relative to the element
    val = e.offsetY;
    val = e.offsetX;
      

   console.log(val);
   
}