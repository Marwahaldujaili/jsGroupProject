
class Calculator {
    constructor() {
        //properties
        this.PI = 3.141592653589793,
            this.E = 2.718281828459045
    }

    //getter
    get pi() {
        return `PI (${this.PI})`;
    }
    get e() {
        return `Euler's number (${this.E})`;
    }

    //methods
    ratio(x, y, width) {// height = y*width / x
        return `Height is ${y * width / x} based on ratio ${x} and ${y}`
    }
    percentage(x, y) {
        return `The percentage is ${x / y * 100}`
    }
    add(x, y) {
        return `The sum of ${x} and ${y} is ${x + y}`
    }
    subtract(x, y) {
        return `The difference of ${x} subtracted from ${y} is ${y - x}`
    }
    multiply(x, y) {
        return `The product of ${x} multiplied by ${y} is ${x * y}.`
    }
    divide(x, y) {
        if (y !== 0) {
            return `The quotient of ${x} divided by ${y} is ${x / y}`
        }
        else {
            return `Y cannot be zero, please select a different value`
        }
    }
    modulation(x, y) {
        if (y !== 0) {
            return `The remainder of ${x} divided by ${y} is ${x % y}`
        }
        else {
            return `Y cannot be zero, please select a different value`
        }
    }
    elevate(x, y) {
        return `The power of ${x} elevated to ${y} is ${x ** y}`
    }
    sqrt(x) {
        return `The square root of ${x} is ${Math.sqrt(x)}`
    }
}

const calculator1 = new Calculator;

console.log(calculator1.pi);
console.log(calculator1.e);
console.log(calculator1);
console.log(calculator1.ratio(16, 9, 1920));
console.log(calculator1.percentage(2, 4));
console.log(calculator1.add(2, 4));
console.log(calculator1.subtract(2, 1));
console.log(calculator1.multiply(5, 6));
console.log(calculator1.divide(5, 6));
console.log(calculator1.divide(5, 0));
console.log(calculator1.modulation(6, 5));
console.log(calculator1.modulation(5, 0));
console.log(calculator1.elevate(5, 3));
console.log(calculator1.sqrt(99));