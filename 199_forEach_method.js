// https://code.mu/ru/javascript/book/prime/enumeration/forEach/


// №1
// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

const arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
  sum += elem ** 2;
});

console.log(sum);