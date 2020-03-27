// Prototype Explained
// Object.prototype
// Person.prototype

function Person( firstname , lastname, DOB ) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthday = new Date(DOB); // Date Object is a constructor in JS 
  // this.calcAge = function () {
  //   // Calculating the Age
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}


// calculate age
Person.prototype.calcAge = function () {
  // Calculating the Age
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
const john = new Person('John' , 'Doe', '08-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// get Fullname

Person.prototype.getFullName = function () {
  return `${this.firstname} ${this.lastname}`
}

// Get Married
Person.prototype.getMarried = function (newLastName) {
  this.lastname = newLastName;
}

console.log(mary.getFullName());

mary.getMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstname'));

console.log(mary.hasOwnProperty('getFullName()'));

