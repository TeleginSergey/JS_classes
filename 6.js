// 6. Математические выражения
// Условие:
// Создайте класс Expression, представляющий математическое выражение с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
// evaluate() — возвращает результат выражения.
// toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".

// Создайте подклассы для различных математических операций:
// Addition для сложения.
// Subtraction для вычитания.
// Multiplication для умножения.
// Division для деления (с проверкой деления на ноль).
// Создайте несколько объектов выражений и выведите результаты их вычислений.

// Ожидаемый результат:
// Каждый объект правильно вычисляет математическое выражение.
// Метод toString() корректно выводит информацию в формате "a op b = result".


class Expression {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    evaluate() {}
    toString() {}
}

class Addition extends Expression {
    evaluate() {
        return this.a + this.b;
    }

    toString() {
        return `${this.a} + ${this.b} = ${this.evaluate()}`;
    }
}

class Subtraction extends Expression {
    evaluate() {
        return this.a - this.b;
    }

    toString() {
        return `${this.a} - ${this.b} = ${this.evaluate()}`;
    }
}

class Multiplication extends Expression {
    evaluate() {
        return this.a * this.b;
    }

    toString() {
        return `${this.a} * ${this.b} = ${this.evaluate()}`;
    }
}

class Division extends Expression {
    evaluate() {
        if (this.b === 0) {
            return 'Error! You cannot divide by zero!';
        }
        return this.a / this.b;
    }

    toString() {
        return `${this.a} / ${this.b} = ${this.evaluate()}`;
    }
}

const add = new Addition(1, 0);
const subtract = new Subtraction(1, 0);
const multiply = new Multiplication(1, 0);
const divide = new Division(1, 0);

console.log(add.toString());     
console.log(subtract.toString());
console.log(multiply.toString());
console.log(divide.toString());
