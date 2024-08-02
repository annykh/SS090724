// variable
// concat
// if
// for
// Array

// let var1 = 20;
// let var2 = 40;

// console.log();
// alert('Hello');

// let var3 = prompt('enter the number');
// console.log(var3);

// const pi = 3.14;
// pi = 20; // error

// let first_name = 'John';
// let last_name = 'Smith';

// Hi, my name is <first_name> <last_name>.

// console.log('Hi, my name is ' + first_name + ' ' + last_name + '.');
// console.log(`Hi, my name is ${first_name} ${last_name}.`);

// Задание: Написать программу, которая запрашивает у пользователя Имя, Фамилию, Возраст и выводит в консоль строку 
// “Hello, my name is UserName UserSurname. I'm UserAge.”. 
// Для вывода использовать два варианта: конкатенация и интерполяция.


let userName = prompt('enter your name');
let userSurname = prompt('enter your lastname');
let userAge = +prompt('enter your age');

console.log('Hello, my name is ' + userName + ' ' + userSurname +  ". I'm " + userAge + '.');
