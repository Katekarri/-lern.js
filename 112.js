import { testMe } from './utils.js'

// Задача 1
// Напишите функцию, которая будет находить сумму квадратов элементов массива.

function squareSum(num) {
  let x = 0; 

  for (let i = 0; i < num.length; i++) {
     x += num[i]**2
  }

  return x;
}
testMe(squareSum, [], 0);
testMe(squareSum, [5, 7, 3], 83);
testMe(squareSum, [2], 4);



// Задача 2
// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num) {
  let sum = 0;

  let str = String(num);
  for(let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return sum;
}
testMe(getDigitsSum, 7, 7);
testMe(getDigitsSum, 805, 13);
testMe(getDigitsSum, 23, 5);

// Задача 3
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]

// Задача 4
// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(str) {
  return str.split('').reverse().join('');
}
testMe(reverseStr, 'abcd', 'dcba')
testMe(reverseStr, '', '')

// Задача 5
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// Задача 6
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function createArray(end) {
  let arr = [];
  for(let i = 1; i <= end; i++){ 
    arr.push(i);       
  }  
  return arr
}

testMe(createArray, 7, [1, 2, 3, 4, 5, 6, 7]);
testMe(createArray, 2, [1, 2]);
testMe(createArray, 0, []);

// Задача 7
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function createArray2(start, end) {
  let arr = [];
  
  for(let i = start; i <= end; i++){ 
    arr.push(i);       
  }  
 return arr
}
console.log(createArray2(3, 5))
