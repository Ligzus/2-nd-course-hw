// Задание 1:
let password = 'пароль';
let message = prompt('Введите пароль');

if (message === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// Задание 2:
const c = 0
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Тернарный оператор:
c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно')

// Задание 3:
let d = 5
let e = 101
d > 100 || e > 100 ? console.log('верно') : console.log('неверно');

// Задание 4:
let a = '2';
let b = '3';
alert(+a + +b);

// Задание 5:
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case "12":
    case "1":
    case "2":
        console.log('зима');
        break;
    case "3":
    case "4":
    case "5":
        console.log('весна');
        break;
    case "6":
    case "7":
    case "8":
        console.log('лето');
        break;
    case "9":
    case "10":
    case "11":
        console.log('осень');
        break;
    default: console.log('Неверный номер месяца');
        break;
}

// Задание 7:
let userInput = prompt('Пожалуйста, введите любое число');

if (!isNaN(userInput)) {
    let number = (userInput);

    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }

} else {
    alert('Вы ввели не число');
}

// Задание 8:
let clientOS = 1
clientOS === 0 ? console.log('Установите версию приложения для iOS по ссылке') : console.log('Установите версию приложения для Android по ссылке');

// Или так:
let clientOS1 = 1;
let OS;

if (clientOS1 === 0) {
    OS = 'iOS';
} else {
    OS = 'Android';
}

alert(`Установите версию приложения для ${OS} по ссылке`);

// Задание 9:
let clientOS2 = 'Android'; 
let clientDeviceYear = 2015; 

if (clientDeviceYear >= 2015) {
    alert(`Установите версию приложения для ${clientOS2} по ссылке`);
} else {
    alert(`Установите облегченную версию приложения для ${clientOS2} по ссылке`);
}