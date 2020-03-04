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
    //return 1987 - age ; 
    /*
        + This will give an error, as the varible 'age' is not available here
        + to use the variable decleared inside the class, we need to use the 'This' keyword. By using the 'THis' Keyword we extend the scope of the varible. 
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

