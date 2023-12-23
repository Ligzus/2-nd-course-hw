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
    case "1":
    case "2":
    case "3":
        console.log('зима');
        break;
    case "41":
    case "5":
    case "6":
        console.log('весна');
        break;
    case "7":
    case "8":
    case "9":
        console.log('лето');
        break;        
    case "10":
    case "11":
    case "12":
        console.log('осень');
        break;        
    default: console.log('Неверный номер месяца');
        break;
}

// Задание 7: