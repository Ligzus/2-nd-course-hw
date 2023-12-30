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
function square(a) {
    const sqr = a ** 2;
    console.log(sqr);
}

square(5);

// 3.2:
function square2(n) {
    return n ** 2
}

let result4 = square2(6)
console.log(result4)


// Задание 4:
function sayHello() {
    let age = prompt('Сколько Вам лет?');

    if (age < 0 || isNaN(age) || age === null || age.trim() === "") {
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
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }

    if (a === null || a.toString().trim() === "" || b === null || b.toString().trim() === "") {
        return 'Одно или оба значения не являются числом';
    }  

    return a * b;
}

console.log(nums(4, 5));
console.log(nums('gyg', 5));

// Задание 6:
function cube() {
    let userNums = prompt(`Введите число:`)

    if (isNaN(userNums) || userNums === null || userNums.trim() === "") {
        console.log(`Одно или оба значения не являются числом`);
    } else {
        console.log(userNums ** 3);
    }

}

cube();


// Задание 7:
function createCircle(radius) {
    return {
        radius: radius,

        getArea: function() {
            return Math.PI * this.radius ** 2;
        },

        getPerimeter: function() {
            return 2 * Math.PI * this.radius;
        }
    };
}

let circle1 = createCircle(5);
let circle2 = createCircle(8);

console.log('Площадь первого круга:', circle1.getArea());
console.log('Периметр первого круга:', circle1.getPerimeter());

console.log('Площадь второго круга:', circle2.getArea());
console.log('Периметр второго круга:', circle2.getPerimeter());




// Задание 8 (для удобства и скорости проверки ДЗ оставил в основном js с задачами, при этом п.8 вызывается ко кнопке на сайте)
function numOfseasons() {
    let userNumber = prompt('Введите номер месяца:');

    userNumber = parseInt(userNumber);
    
    if (userNumber === 1 || userNumber === 2 || userNumber === 12) {
        alert('зима');      
    } else if (userNumber === 3 || userNumber === 4 || userNumber === 5) {
        alert('весна');
    } else if (userNumber === 6 || userNumber === 7 || userNumber === 8) {
        alert('лето');
    } else if (userNumber === 9 || userNumber === 10 || userNumber === 11) {
        alert('осень');
    } else {
        alert('Вы ввели неверное значение');
    }
}

numOfseasons();