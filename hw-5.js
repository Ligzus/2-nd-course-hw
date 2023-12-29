// Задание 1:
function minNum(a, b) {
    return Math.min(a, b)    
}

let result = minNum(8, 4);
let result1 = minNum(6, 6);

console.log(result);
console.log(result1);


// Задание 2:
function parity(a) {
    return (a % 2 === 0) ? 'Число четное' : 'Число нечетное';
}

let result2 = parity(8);
let result3 = parity(5);

console.log(result2);
console.log(result3);


// Задание 3:
// 3.1:
let square = (a) => a ** 2;
console.log(square(4)); // я сам додумался о такой записи, нигде ее не видел в уроках, получилось супер кратко

// 3.2:
function square2(n) {
    return n ** 2
}

let result4 = square2(6)
console.log(result4)


// Задание 4:
function sayHello() {
    let age = prompt('Сколько Вам лет?');

    if (age < 0 || isNaN(age)) {
        console.log('Вы ввели неверное значение')        
    } else if (age <= 12) {
        console.log('Привет, друг!')        
    } else {
        console.log('Добро пожаловать!') 
    }
}

sayHello();


// Задание 5:
function nums(a, b) {
    let mult = a * b;

    if (isNaN(a) || isNaN(b)) {
        console.log(`Одно или оба значения не являются числом`);
    } else {
        console.log(mult);
    }
}

nums(4, 5);
nums('гыг', 5);

// Задание 6:
function cube() {
    let userNums = prompt(`Введите число:`)

    if (isNaN(userNums)) {
        console.log(`Одно или оба значения не являются числом`);
    } else {
        console.log(userNums ** 3);
    }

}

cube();


// Задание 7:
// Круг 1
let circle1 = {
    radius: 5,
    getArea: function() {
        return `Площадь круга 1 равна ${this.radius ** 2 * Math.PI}`;
    },
    getPerimeter: function() {
        return `Периметр круга 1 равен ${this.radius * 2 * Math.PI}`;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

// Круг 2
let circle2 = {
    radius: 10,
    getArea: function() {
        return `Площадь круга 2 равна ${this.radius ** 2 * Math.PI}`;
    },
    getPerimeter: function() {
        return `Периметр круга 2 равен ${this.radius * 2 * Math.PI}`;
    }
};

console.log(circle2.getArea());
console.log(circle2.getPerimeter());


// Задание 8:


