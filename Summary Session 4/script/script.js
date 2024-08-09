// Задание : Написать программу, которая считывает два числа (объявляем две переменные (a b) и записываем туда результат работы двух вызовов prompt) и выводит их разницу, сумму и произведение.
// Вывод должен быть по шаблону: (“Разность чисел a и b равна sub, сумма чисел a и b равна sum, произведение чисел a и b равно mult”)

// let a = Number(prompt('enter the number'));
// let b = +prompt('enter the number');

// console.log(`Разность чисел ${a} и ${b} равна ${a-b}, сумма чисел ${a} и ${b} равна ${a+b}, произведение чисел ${a} и ${b} равно ${a*b}`);


// if(условие 1){
//     действия 1
// }
// else if(условие 2){
//     действия 2
// }
// ...
// else {
//     действия N
// }

// > < == === != !== >= <=
// && ||

// if ('5' == 5){
//     console.log('true');
// }

// if ('5' === 5){ // string == number && 5 == 5
//     console.log('true');
// }

// Задачи на условные операторы и циклы: 
// 1. Объявить три числовых переменных и вывести наибольшее из них.
// let num1 = +prompt('enter the number');
// let num2 = +prompt('enter the number');
// let num3 = +prompt('enter the number');

// if(num1 >= num2 && num1 >= num3){
//     console.log(num1);
// }
// else if(num2 >= num1 && num2 >= num3){
//     console.log(num2);
// }
// else{
//     console.log(num3);  
// }

// 2. Вывести все числа от 1 до 10, которые без остатка делятся на 3.
// for(let num = 1; num <= 10; num++){
//     if(num % 3 === 0){
//         console.log(num);
//     }
// }

// 1. num = 1; true; num++
//     1 % 3 == 0 false
// 2. num = 2; true; num++
//     2 % 3 == 0 false
// 3. num = 3; true; num++
//     3 % 3 == 0 true
//     console.log(3);
// ...
    

// 3. Вывести все четные числа от 1 до 100.

// for(let num = 1; num <= 100; num++){
//     if(num % 2 == 0){
//         console.log(num);
//     }
// }

// for(let num = 2; num <= 100; num+=2){
//     console.log(num);    
// }


// let userNames = ['John', 'Derek', 'Tom', 'Lily', 'Jenifer'];

// userNames.push('Helen');
// userNames.pop();
// userNames.unshift('Ann');
// userNames.shift();

// userNames[3] = 'Laura';

// userNames.splice(start, deleteCount, [elem1, elem2, ...]);
// [] - необязателные параментры

// Удалить два элемента начиная с третьего
// Начиная с элемента с индекском 2 удалить два элемента
// userNames.splice(2, 2);
// console.log(userNames);

// Добавить один элемент с индексом 1
// userNames.splice(1, 0, 'Ken');
// console.log(userNames);

// Начиная с индекса 2 удалить один элемент и добавить два элемента
// userNames.splice(2, 1, 'Thomas', 'Bob');
// console.log(userNames);



// let numbers = [4, 2, 0, -1, 6, 0, 2, -56, 38, 103, -25, -6, 4];

// let result = '';

// for(let i = 0; i < numbers.length; i++){
//     result = result + numbers[i] + ' ';
// }

// console.log(result);

// result = '';

// 1. result = '' + 4 + ', ' // '4, '
// 2. result = '4, ' + 2 + ', ' // '4, 2, '



// Из массива Numbers вывести все нечетные числа
// let result = '';
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 !== 0){
//         // console.log(numbers[i]);      
        // result += numbers[i] + ' '
//     }
// }

// console.log("Все нечетные числа: " + result);

// Из массива Numbers вывести положительные числа
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         console.log(numbers[i]);
//     }
// }

// Найти сумму четных элементов массива

// let sum = 0;

// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         // sum = sum + numbers[i]; 
//         sum += numbers[i]; 
//     }
// }

// console.log(sum);

// let user = {
//     firstName: 'John',
//     'last name': 'Smith'
// }

// console.log(user["last name"]);
// console.log(user.firstName);

// let user = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 35,
//     address: {
//         country: 'Armenia', 
//         city: 'Yerevan',
//         street: 'Stepanyan'
//     },
//     friends: ['Tom', 'Taylor', 'Bob', 'Helen']
// };

// // Вывести всех друзей пользователя
// console.log(user.friends);

// // Вывести город пользователя
// console.log(user.address.city);

// // Вывести второго друга
// console.log(user.friends[1]);

// // Добавить в объект user свойство is_married - true
// user.is_married = true;

// // Добавить нового друга
// user.friends.push('Thomas');

// // Изменить имя на 'Jameson'
// user.firstName = 'Jameson';

// console.log(user);


// let arr = [
//     {
//         id: 1,
//         title: "bicycle",
//         price: 45000,
//         discount: 10
//     },
//     {
//         id: 2,
//         title: "roller-skates",
//         price: 15000,
//         discount: 5
//     },
//     {
//         id: 3,
//         title: "Kick scooter",
//         price: 10000,
//         discount: 30
//     },
//     {
//         id: 4,
//         title: "skis",
//         price: 25000,
//         discount: 20
//     },
//     {
//         id: 5,
//         title: "skate",
//         price: 10000,
//         discount: 0
//     }
// ];

// console.log(arr[0].title);
// console.log(arr[1].title);

// Написать цикл, который выводит только названия товаров.
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i].title);
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[i].title} (${arr[i].price})`);  
// }


// function getMax(){
//     ...
// }

// let getMax = function() {
//     ...
// }

// function showMessage() {
//     console.log('Hello');
// }


// let showMessage1 = function(){
//     console.log('Hello1');
// }

// showMessage();
// showMessage1();

let getMax = function(a, b, c) {
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    }
    return c;
}

console.log(getMax(6, 3, 7));
console.log(getMax(4, 7, 1));
console.log(getMax(10, 3, 25));
console.log(getMax(0, 3, 1));
