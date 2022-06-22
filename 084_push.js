// https://code.mu/ru/javascript/book/prime/loops/array-push-filling/

// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

// let arr1 = [];

// arr1.push(1);
// arr1.push(2);
// arr1.push(3);
// arr1.push(4);
// arr1.push(5);
// arr1.push(6);
// arr1.push(7);
// arr1.push(8);
// arr1.push(9);
// arr1.push(10);

let arr1 = [];

for (let i = 1; i <= 10; i++) {
  arr1.push(i);
}


// Задача 2
// Используя цикл и метод push заполните массив числами от 1 до 10.

let arr2 = [];

for (let i = 1; i <= 10; i++) {
  arr2.push(i);
}


// Задача 3
// Используя цикл и метод push заполните массив 10-ю буквами 'x'.

// let arr3 = [];
// let str = 'x';

// for (let i = 0; i <= 9; i++) {
//   arr3[i] = str;
// }


let arr3 = [];
let str = 'x';

for (let i = 0; i < 10; i++) {
  arr3.push('x');
}


// Задача 4
// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел


let arr4 = [1, 5, -6, 8, -10, 5];
let result = [];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > 0) {
    result.push(arr4[i]);
  }
}


// Задача 5
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Описанным способом сделайте из него массив:
// let arr = ['e', 'd', 'c', 'b', 'a'];


let arr5 = ['a', 'b', 'c', 'd', 'e'];
let nuwArr = [];

for (let i = arr5.length - 1; i >= 0; i--) {
  nuwArr.push(arr5[i]);
}


// Задача 6
// Автор следующего кода хотел создать массив вида ['a', 'b', 'c']:
// arr.push('a');
// arr.push('b');
// arr.push('c');
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr6 = [];

arr6.push('a');
arr6.push('b');
arr6.push('c');

console.log(arr6);


// Задача 7
// Автор следующего кода хотел создать заполнить массив числами от 1 до 5:
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr7 = [];

for (let i = 1; i <= 5; i++) {
  arr7.push(i);
}
console.log(arr7);

// Задача 8
// Автор следующего кода хотел записать в новый массив только нечетные элементы старого массива:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }
// console.log(result);
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let oddNumbers = [];

for (let elem of arr8) {
  if (elem % 2 != 0) {
    oddNumbers.push(elem);
  }
}

console.log(oddNumbers);









