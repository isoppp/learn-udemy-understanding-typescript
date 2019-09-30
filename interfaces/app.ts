interface NamedPerson {
  firstName: string;
  age?: number;

  greet?(lastName: string): void;

  [propName: string]: any;
}

// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

function greet(person: NamedPerson) {
  console.log('hello,', person.firstName)
}

function changeName(person: NamedPerson) {
  person.firstName = 'Anna'
}

const anna: NamedPerson = {
  firstName: 'Anna',
  list: [],
  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${lastName}.`)
  }
}

greet({ firstName: 'hi', age: 27 });
changeName(anna)
greet(anna)


class PersonI implements NamedPerson {
  firstName: string = '';

  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${lastName}.`)
  }
}
const myPerson = new PersonI();
myPerson.firstName = 'HI'
greet(myPerson);
myPerson.greet('popo');


// Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const doubleFunction: DoubleValueFunc = (value1, value2) => {
  return value1 + value2
}
console.log(doubleFunction(1, 2));


