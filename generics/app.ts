// Sinple Generic
function echo(data: any) {
  return data;
}

console.log(echo("Hi"))
console.log(echo(27))
console.log(echo({ name: "Hi", age: 27 }))

// Better Generic
function betterEcho<T>(data: T) {
  return data
}

console.log(betterEcho("Hi").length)
console.log(betterEcho<number>(27))
console.log(betterEcho({ name: "Hi", age: 27 }))

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push('3.22');

// Arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element))
}

printAll<string>(['Apple', 'Banana'])

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("something"));

// Generic Class
class SimpleMath<T extends number, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  constructor(base: T, multiply: U) {
    this.baseValue = base
    this.multiplyValue = multiply
  }

  calculate(): number {
    return this.baseValue * +this.multiplyValue
  }
}

const simpleMath = new SimpleMath<number, string>(10, '20');
console.log(simpleMath.calculate())
