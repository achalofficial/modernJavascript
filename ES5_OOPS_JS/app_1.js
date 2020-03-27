// Constructor and the 'This' Keyword

function Person( name , DOB ) {
  this.name = name;
  //this.age = age;
  this.birthday = new Date(DOB); // Date Object is a constructor in JS 
  this.calcAge = function () {
    // Calculating the Age
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// 'This' Keyword makes an instance of the Function
// When 'This' is in the global scope it persist the window

// const brad = new Person('Brad',36);
// const john = new Person('John',30);

// console.log(john.age , brad.age);

const brad = new Person ('John','9-10-1981' );
console.log(brad.calcAge());
