// Задача 1
// Дана переменная a со значением '10' и переменная b со значением '20'.Сложите данные переменные как числа.

// let a = '10';
// let b = '20';
// let c = (Number(a) + Number(b));
// console.log(c);

// let a = '10';
// let b = '20';
// console.log(Number(a) + Number(b));

let a = Number('10');
let b = Number('20')
let c = a + b;
// console.log(c);

// Задача 2
// Не запуская код, определите, что выведется на экран:
// alert(Number('2') + Number('3'));
5

// Задача 3
// Не запуская код, определите, что выведется на экран:
// alert( 2 + Number('3') );
5

// Задача 4
// Не запуская код, определите, что выведется на экран:
// alert('2' + Number('3'));
'23'

// Задача 5
// Дан код:
// let a = '2';
// let b = '3';
// alert(a + b); // выведет '23'
// С помощью описанного приема с плюсом исправьте приведенный код так, чтобы в переменные a и b присваивалось число, а не строка, ну и результатом, соответственно, было не '23', а 5.

// let aTask5 = Number('2');
// let bTask5 = Number('3');
// alert(aTask5 + bTask5);


let aTask5 = '2';
let bTask5 = '3';
alert(Number(aTask5) + Number(bTask5));