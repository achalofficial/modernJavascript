// Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
//clearBtn.addEventListener('click', runEvent);
//  Double Click
//clearBtn.addEventListener('dblclick', runEvent);
// MOuse Down
// clearBtn.addEventListener('mousedown', runEvent);
// // Mouse UP
// clearBtn.addEventListener('mouseup', runEvent);
// // Mouse Enter
// clearBtn.addEventListener('mouseenter', runEvent);
// // Mouse Leave
// clearBtn.addEventListener('mouseleave', runEvent);
// // Mouse Over
// card.addEventListener('mouseover', runEvent);
// // Mouse Out
// card.addEventListener('mouseout', runEvent);


function runEvent(e) {
  console.log(`Event Created : ${e.type}`);
}