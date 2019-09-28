// Types
let str: string = 'string'
let num: number = 0;
let bool: boolean = true;
let arr: number[] = [0, 1, 2];

let tuple: [string, number] = ['1', 0];

enum Color {
  Gray, // 0
  Green = 2,
  Red, // 3
}

const color = Color.Gray // 0

let any: any = 'a'
any = 0
any = { any: true }

function example(arg1: number, arg2: string): void {
}

let func: (arg1: number, arg2: string) => void = example

let obj: { name: string, age: number } = {
  name: 'name',
  age: 0,
}

let complexObj: { data: number[], output: (all: boolean) => number[] } = {
  data: [1, 2, 3],
  output: function (all: boolean): number[] {
    return [1, 2, 3]
  }
}

type Complex = { data: number[], output: (all: boolean) => number[] }
let complexObj2: Complex = {
  data: [1, 2, 3],
  output: function (all: boolean): number[] {
    return [1, 2, 3]
  }
}

let badUnion: any = 27 // or '27'
let goodUnion: number | string = 27 // or '27'

function neverReturn(): never {
  throw new Error('error!')
}

let nullable: number | null = 13
nullable = null
