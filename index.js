
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
}

const calculator1 = new Calculator;

console.log(calculator1.pi);
console.log(calculator1.e);
console.log(calculator1);