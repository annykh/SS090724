// Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

// let a = +prompt('enter the number');
// let b = +prompt('enter the number');

// function getResult(num1, num2){
//     if(num1>num2){
//         return 1;
//     }
//     else if(num2>num1){
//         return -1;
//     }
//     else{
//         return 0;
//     }
// }

// console.log(getResult(10, 5));
// console.log(getResult(-12, 8));
// console.log(getResult(5, 5));
// console.log(getResult(a, b));

// Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов.

// function getSum(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// console.log(getSum([10, 5, 2, 0, 1]));

// let numbers = [5, -1, 4, 90, 2, -65];

// console.log(getSum(numbers));

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа больше определенного порога(N).

// let N = +prompt('enter the number');
// let numbers = [10, 2, -9, 0, 34, 7, 19, 37, -23, 7];

// function getNewArray(array, number){
//     let new_array = [];
//     for (let i = 0; i < array.length; i++){
//         if(array[i]>number){
//             new_array.push(array[i]);
//         }
//     }
//     return new_array;
// }

// console.log(getNewArray(numbers, N));

// Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент увеличен в два раза, если он четный, и в три раза, если он нечетный.

// [2, 3, 7, 5, 4]

// [4, 9, 21, 15, 8]

// function getNewArray(array){
//     let new_array = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % 2 === 0){
//             new_array.push(array[i] * 2);
//         }
//         else{
//             new_array.push(array[i] * 3);
//         }
//     }
//     return new_array;
// }

// let numbers = [2, 3, 4, 5, 6];
// let numbers1 = [0, 34, 8, -3, 0, 32, -45];
// console.log(getNewArray(numbers));
// console.log(getNewArray(numbers1));


// DOM

// Document object model

// document.querySelector
// document.querySelectorAll

// let paragraph = document.querySelector('p');

// console.log(paragraph);

// console.log(paragraph.innerText);
// console.log(paragraph.innerHTML);

// paragraph.innerText = 'Hello Javascript';

// let new_p = document.createElement('p');
// new_p.innerText = 'New paragraph';

// document.body.append(new_p);
// document.body.prepend(new_p);


// let link = document.createElement('a');

// link.setAttribute('href', '...')
// link.setAttribute('target', '_blank');
// link.hasAttribute('href');//true/fasle
// link.getAttribute('href');//'...'

// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
//     console.log('hello');
// })

// function sendMessage(){
//     console.log('Hello!');
// }

// btn.addEventListener('click', sendMessage);

// Написать программу, которая находит параграфы и заменяет в каждом из них текст на “привет”.

// let paragraphs = document.querySelectorAll('p');

// // console.log(paragraphs);

// for(let i = 0; i < paragraphs.length; i++){
//     paragraphs[i].innerText = 'Hello';
// }

// Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.

// let button = document.querySelector('button');
// let paragraph = document.querySelector('p');

// button.addEventListener('click', getSum);

// function getSum(){
//     let sum = 0;
//     for(let i = 1; i <= 100; i++){
//         sum += i;
//     }
//     paragraph.innerText = sum;
// }

// Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца(число) в квадрат.

let paragraph = document.querySelector('p');
let button = document.querySelector('button');

button.addEventListener('click', getPow)

function getPow(){
    paragraph.innerText = Number(paragraph.innerText) ** 2;
}
