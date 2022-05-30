// //https://code.mu/ru/javascript/book/prime/collections/mistakes/


// Задача 1
// Код должен вывести последний элемент массива:
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length]);

console.log(arr[arr.length-1]);

// Задача 2
// Код должен найти сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[5]);

console.log(arr1[0] + arr1[1] + arr1[2] + arr1[3] + arr1[4]);


const arr2 = [1, 2, 3, 4, 5];
let sum = 0;

for(let i = 0; i < arr2.length; i++){
  sum += arr2[i];
}

console.log(sum);

// Задача 3
// Код должен вывести длину массива:
// let arr = {1, 2, 3, 4, 5};
// console.log(arr.length]);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// Задача 4
// Код должен вывести элемент объекта:
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj[a]);

const obj = {a: 1, b: 2, c: 3};
console.log(obj.a);


// Задача 5
// Код должен вывести элемент объекта по ключу из переменной:
// let obj = {a: 1, b: 2, c: 3};
// let key = 'a';
// console.log(obj.key);

const obj3 = {a: 1, b: 2, c: 3};
let key = 'a';
console.log(obj3['a']);

// Задача 6
// Код должен вывести сумму элементов объекта:
// let obj = {a: 1, b: 2, c: 3};
// let sum = obj[a] + obj[b] + obj[c];
// console.log(obj);

const obj6 = {a: 1, b: 2, c: 3};
let sum2 = obj6.a + obj6.b + obj6.c;
console.log(sum2);

// Задача 7
// Код должен вывести количество элементов объекта
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.length); 
 
console.log(Object.keys(obj).length);