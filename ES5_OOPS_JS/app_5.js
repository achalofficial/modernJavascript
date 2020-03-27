// Using Object.create

const personPrototypes = {
  greeting: function () {
    return `hello there ${this.firstName} ${this.lastName}`
  },

  getMarried: function (newLastname) {
    this.lastName = newLastname;
  }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30 ;

console.log(mary.greeting());
console.log(mary.getMarried('Johnson'));

const brad = Object.create(personPrototypes, {
  firstName:{value:'Brad'},
  lastName: {value:'Johnson'},
  age :{value:36}
});

console.log(brad);




