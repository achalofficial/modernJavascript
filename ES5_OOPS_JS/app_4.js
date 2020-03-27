// PRototype Inheritance

function Person(firstName , lastName){
    this.firstName = firstName ;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const Person1 = new Person('John', 'Doe');

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone ;
  this.membership = membership ;
}

// Inherit the Person Prototype MEthod
Customer.prototype = Object.create(Person.prototype);

// Make the Customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create a Customer
const customer = new Customer('Tom', 'Smith', '555-555-555-555', 'Standard');

console.log(customer);

// Greeting Seprate
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}
  Welcome to Our Comapany`;
}

console.log(customer.greeting());
