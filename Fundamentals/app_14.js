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
while (k<10)