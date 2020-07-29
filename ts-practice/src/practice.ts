// 기본 타입

let count = 0;
count += 1;
// count = "문자열"; //error (not number)

const message: string = "hello";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// messages.push(1); //error (not string)

let mightBeUndefined: string | undefined = undefined; //string or undefined
let nullableNumber: number | null = 0; //number or null;

let color: "red" | "orange" | "yellow" = "yellow"; //red, orange, yellow 중에 하나
color = "orange";
// color = "green"; //error

// 함수 타입 정의

function sum(x: number, y: number): number {
  return x + y;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

// 함수에서 아무것도 반환하지 않을 때(type : void)
function returnNothing(): void {
  console.log("hello");
}

// interface

// Shape 라는 interface를 선언
interface Shape {
  getArea(): number; //Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다
}

class Circle implements Shape {
  // implement 키워드를 사용하여 해당 클래스가 Shape implement의 조건을 충족하겠다는 것을 명시
  //   radius: number;
  //   constructor(radius: number) {
  //     this.radius = radius;
  //   }

  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  //   width: number;
  //   height: number;

  //   constructor(width: number, height: number) {
  //     this.width = width;
  //     this.height = height;
  //   }

  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach(shape => console.log(shape.getArea()));

// Object interface

// interface Person {
//   name: string;
//   age?: number; // ?가 표시되어있는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.
// }

// // interface Developer {
// //   name: string;
// //   age?: number;
// //   skills: string[];
// // }

// // 유사한 형태의 interface를 선언할 때는 다른 interface를 extends키워드를 사용해서 상속 받을 수 있다.
// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: "김사람",
//   age: 25
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript"]
// };

// Type Alias

type Person = {
  name: string;
  age?: number; // ?가 표시되어있는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미한다.
};

// & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
  age: 25
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript"]
};

type People = Person[];
// Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.

const people: People = [person, expert];

type Color = "red" | "yellow" | "orange";
const red: Color = "red";
const colors: Color[] = ["orange", "red"];

// Generics
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return param;
}
const wrapped = wrap(10);

type Itmes<T> = {
  list: T[];
};

const item: Itmes<String> = {
  list: ["a", "n"]
};

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
