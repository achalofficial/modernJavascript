// General Loop

// For Loop

for(let i = 0 ; i < 10 ; ++i){
  if (i == 2){
    console.log('Two is my fav number');
    continue;
  }

  console.log('number' + i);

  if(i == 5){
    console.log('Stop the Loop');
    break;
  }
}

console.clear();

//WHILE loop

let j =0 ;
while(j<10){
  console.log( 'number' + 1);
  j++;
}
console.clear();

let k = 100;
do { 
  console.log(k);
}
while (k<10);

console.clear();

// For Loop with Array

const cars = ['ford','toyota','honda','kiwid','ritzz'];

for (let i = 0 ; i < cars.length; ++i){
  console.log(cars[i]); 
}
console.clear();

cars.forEach(function(car){ 
  /*
      + It perform specific operation on each element of the array.
  */
  console.log(car);
});

cars.forEach(function(car,index){ 

  console.log(`${index} : ${car}`);
});

cars.forEach(function(car,index,array){ 
  //console.log(car);
  console.log(array);  
});

//MAP
const users = [
  {id:1, name:'Mike'},
  {id:2, name:'Jack'},
  {id:3, name:'Momo'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

// FOR IN Loop
const user = {
  firstName : 'Mike',
  lastName : 'Johnson',
};

for ( let x in user){
  console.log(x);
  console.log(`${x} : ${user[x]}`); 
}
