"use strict";
// 기본 타입
let count = 0;
count += 1;
// count = "문자열"; //error (not number)
const message = "hello";
const done = true;
const numbers = [1, 2, 3];
const messages = ["hello", "world"];
// messages.push(1); //error (not string)
let mightBeUndefined = undefined; //string or undefined
let nullableNumber = 0; //number or null;
let color = "yellow"; //red, orange, yellow 중에 하나
color = "orange";
// color = "green"; //error
// 함수 타입 정의
function sum(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
// 함수에서 아무것도 반환하지 않을 때(type : void)
function returnNothing() {
    console.log("hello");
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => console.log(shape.getArea()));
