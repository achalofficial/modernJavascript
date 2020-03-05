// Object Literals

const person = {
  firstName:'Steve',
  lastName :'Smith',
  age: 30,
  email: 'steve@gmail.com',
  hobbies:['music','games'],
  address:{
    city: 'NY',
    state:'LA',
  },
  getbirthyear: function(){
    //return 1987 - age ; ERROR 
    /*
        + This will give an error, as the varible 'age' is not available here
        + to use the variable decleared inside the class, we need to use the 'This'   keyword. By using the 'THis' Keyword we extend the scope of the varible. 
    */
   return 1987 - this.age;
  }
}

let val ;

val = person ;

// get specific Value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies;
val = person.address['city'];
val = person.getbirthyear();

console.log(val);

const people = [
  { name : 'Mike', age : 36 },
  { name : 'Jack', age : 21 },
  { name : 'Rand', age : 34}
];

for (let i = 0 ; i < people.length ; ++i){
    console.log(people[i].name); 
}