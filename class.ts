class Person {
  name: string;
  age: number = 10;
  private privateProp: number = 10;
  protected protectedProp: string = 'abc';

  constructor(name: string, public username: string) {
    this.name = name
  }

  printAge(): void {
    console.log(this.age)
    this.protectedMethod()
  }

  protected protectedMethod(): void {
    console.log('protedted')
  }
}

const person = new Person('name', 'username')
console.log(person.name, person.username)
person.printAge();


// Inheritance

class Iso extends Person {
  private _setterAndGetter: string = '';

  get setterAndGetter() {
    return this._setterAndGetter;
  }

  set setterAndGetter(value: string) {
    if (value.length > 2) {
      this._setterAndGetter = 'hoge'
    } else {
      this._setterAndGetter = value
    }
  }

  constructor() {
    super('iso', 'isoppp')
    this.setterAndGetter = 'strrrr'
  }
}

const iso = new Iso()
console.log(iso.name);
console.log(iso)

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number{
    return this.PI * diameter
  }
}
console.log(Helpers.PI)
console.log(Helpers.calcCircumference(100))

// Abstract Classes
abstract class Project {
  projectName: string = 'default';
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class AProject extends Project {
  changeName(name: string): void {
    this.projectName = name
  }
}

// private constructor & singleton
class OnlyOne {
  public readonly id: number = 1;
  private static instance: OnlyOne;
  private constructor(public name: string) {}

  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('Only one');
    }
    return OnlyOne.instance
  }
}

const instance = OnlyOne.getInstance()
