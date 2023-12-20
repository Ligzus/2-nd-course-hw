let a = 10;
alert (a);

a = 20;
alert (a);

let iphoneRelise = 2007;
alert(`Первый iPhone вышел в ${iphoneRelise} году`)

let godName = "Brendan Eich";
alert(`Основателем языка JavaScript является ${godName}`)

let num1 = Number (10);
let num2 = Number (2);
alert(num1 + num2);
alert(num1 - num2);
alert(num1 * num2);
alert(num1 / num2);

let num3 = 2;
alert(num3**5);

a = 9;
let b = 2;
alert(a%b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

let user = {
    name: 'Маратик (адидас младший)',
    age: 15,
    isAdmin: true
};
user["city of residence"] = "Казань, ОПГ: Универсам";
user.age = 16;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);