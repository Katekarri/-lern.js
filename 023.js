// Задача 1
// Дана переменная со значением '5px' и переменная со значением '6px'.Найдите сумму пикселей из значений этих переменных и выведите ее на экран.

let example1A = '5px';
let example1B = '6px';
let example1c = parseInt(example1A) + parseInt(example1B);
console.log(example1c);

// Задача
// Дана переменная со значением '5.5px' и переменная со значением '6.25px'. Найдите сумму пикселей из значений этих переменных и выведите ее на экран.
 
let example2A = '5.5px';
let example2B = '6.25px';
let example2c = parseFloat(example2A) + parseFloat(example2B);
console.log(example2c);

// Задача 3
// Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'. То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.

let example3A = '5.5px';
let example3B = '6.25px';
let example3c = parseFloat(example3A) + parseFloat(example3B);
let example3d = String(example3c);
console.log(example3d);
// alert(typeof example3d)