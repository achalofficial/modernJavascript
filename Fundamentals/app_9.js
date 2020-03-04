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
    return 1987;
  }

}

let val ;

val = person ;

// get specific Value
val = person.firstName;
val = person['lastName'];
val = person.age;

console.log(val);

