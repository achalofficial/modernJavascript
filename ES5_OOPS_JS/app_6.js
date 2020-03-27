// ES6 Classes

class Person {
  constructor( firstName, lastName, dob){
      this.firstName = firstName ;
      this.lastName = lastName ;
      this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}` ;
  }

  calcAge() {
    // Calculating the Age
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getMarried (newLastName){
    this.lastName = newLastName ;
  }

  static addNum (x,y) {
    return x+y;
  }
}

const mary = new Person('Mary', 'William');

console.log(mary);

console.log(Person.addNum(1,2));

