// http://code.mu/ru/javascript/book/prime/collections/arrays/

// Задача 1
// Создайте массив с элементами 'a', 'b' и 'c'. Выведите его на экран с помощью функции alert, а также выведите его в консоль с помощью console.log.
'';
let example1 = ['a', 'b', 'c'];
alert(example1);
console.log(example1);

// Задача 2
// Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.

let example2 = ['a', 'b', 'c'];
console.log(example2[0]);
console.log(example2[1]);
console.log(example2[2]);

let example2strong = ['a', 'b', 'c'];
for (const num of example2strong) {
  console.log(num);
}


let example2stronge = ['a', 'b', 'c'];
for (i = 0; i < example2stronge.length;  i++) {
  alert(example2stronge[i])
}

// Задача 3
// Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.

let example3 = ['a', 'b', 'c', 'd'];
console.log(`${example3[0]}+${example3[1]}+${example3[2]}+${example3[3]}`);


let example3old = ['a', 'b', 'c', 'd'];
console.log(example3old[0] + "+" + example3old[1] + "+" + example3old[2] + "+" + example3old[3]);


let example3strong = ['a', 'b', 'c', 'd'];
sumSymbol = '';
for (let i = 0; i <= example3strong.length - 1; i++) {
  sumSymbol += `${example3strong[i]}+`
}
sumSymbol = sumSymbol.substring(0, sumSymbol.length - 1);
alert(sumSymbol)


let example3stronge = ['a', 'b', 'c', 'd'];
let resultExample3 = '';
for (let symbol of example3stronge) {
  resultExample3 += `${symbol}+`
}
resultExample3 = resultExample3.substring(0, resultExample3.length - 1);
console.log(resultExample3)


// let example3 = ['a', 'b', 'c', 'd'];
// console.log(example3[0] + example3[1] + example3[2] + example3[3]);

// let example3strong = ['a', 'b', 'c', 'd'];
// sumSymbol = '';
// for (let i = 0; i <= example3strong.length - 1; i++) {
//   sumSymbol += example3strong[i]  
// }
// alert(sumSymbol)

// let example3stronge = ['a', 'b', 'c', 'd'];
// let resultExample3 = '';
// for (let symbol of example3stronge) {
//   resultExample3 += symbol; 
// }
// console.log(resultExample3)

// Задача 5
// Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let example5 = [2, 5, 3, 9];
let a = (example5[0] * example5[1]);
let b = (example5[2] * example5[3]);
let result = a + b;
console.log(result);

// Задача 7
// Создайте массив с произвольными элементами. Выведите на экран последний элемент этого массива.

let example7 = ['f', 5, 'ghg', 23, '55778', '0'];
console.log(example7[example7.length - 1])

// Задача 8
// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

let example8 = ['a', 'b', 'c'];
example8[0] = 1;
example8[1] = 2;
example8[2] = 3;
console.log(example8);


// Задача 9
// Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив.

let example9 = [8, 3, 9, 4, 35];
example9[0] += 3;
example9[1] += 3;
example9[2] += 3;
example9[3] += 3;
example9[4] += 3;
console.log(example9);


let example9stronge = [8, 3, 9, 4, 35];
for (i = 0; i < example9stronge.length; i++) {
  example9stronge[i] = example9stronge[i] + 3; 
}
 alert(example9stronge)


// let example = [8, 3, 9, 4, 35];

// for (let element of example ){
//     i = example.indexOf(element)// не всегда сработает 
//     example[i] += 3;
// }
// console.log(example);


// let numbers = [8, 3, 9, 4, 35];
// let example9stronge = numbers.map((num) => num + 3);
// alert(example9stronge);//другая задача 


// let example9strong = [8, 3, 9, 4, 35];
// for (let num of example9strong) {
//   console.log(num + 3);
// }//другая задача 


// Задача 11
// С помощью описанного приема создайте массив с элементами 1, 2 и 3.

let example11 = [];
example11[0] = 1; 
example11[1] = 2; 
example11[2] = 3;
console.log(example11);

// Задача 12
// Пусть дан такой массив:
// let arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

let arr = [1, 2, 3];
arr[3] = 4;
arr[4] = 5;
console.log(arr);

// Задача 13
// Пусть дан такой массив:
// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// Узнайте длину этого массива с помощью свойства length.

let arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);