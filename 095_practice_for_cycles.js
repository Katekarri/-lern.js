// https://code.mu/ru/javascript/book/prime/loops/practicum/


// Задача 1
// Выведите с помощью цикла столбец чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Задача 2
// Выведите с помощью цикла столбец чисел от 100 до 1.

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

// Задача 3
// Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Задача 4
// Заполните массив 10-ю иксами с помощью цикла.

const arr4 = [];

for (let i = 1; i <= 10; i++) {
  arr4.push('x');
}


// Задача 5
// Заполните массив числами от 1 до 10 с помощью цикла.

const arr5 = [];

for (let i = 1; i <= 10; i++) {
  arr5.push(i);
}

// Задача 6
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

const arr6 = [1, 8, 4, 12, 78, -6, 2];

for (let i = 0; i <= arr6.length; i++) {
  const elementArr6 = arr6[i]
  if (elementArr6 > 0 && elementArr6 < 10) {
     console.log(elementArr6)
  }
}
   


// Задача 7
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

const arr7 = [1, 8, 4, 5, 12, 78, -6, 2];
  let result = false;

for (let i = 0; i <= arr7.length; i++) {
  if (arr7[i] === 5) {
    result = true;
    break;
  } 
}
  console.log(result);

// Задача 8
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.


const arr8 = [1, 2, 3, -3, 4];
let sumElem = 0;

for (let i = 0; i < arr8.length; i++) {
  sumElem += arr8[i]; 
}


// Задача 9
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

const arr9 = [1, 2, 3, 4, 5];
let result9 = 0;
let getSquareElements = 0;

for (let i = 0; i < arr9.length; i++) {  
  result9 += (getSquareElements  = arr9[i] ** 2) ;
}

// Задача 10
// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).


const arr10 = [1, 2, 3, 4, 5];
let sum10Eements = 0;

for (let i = 0; i < arr10.length; i++) {
  sum10Eements += arr10[i]; 
}

let result10 = sum10Eements/arr10.length;
console.log(result10);

// Задача 11
// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

let num = 4;
let result11 = 1;

for (let i = 1; i <= num; i++){
result11 *= i;
}
