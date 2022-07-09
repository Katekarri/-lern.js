// https://code.mu/ru/javascript/book/prime/inbuilt/math/



// Задача 1
// Возведите 2 в 10 степень.

console.log(Math.pow(2, 10));

// Задача 2
// Найдите квадратный корень из 245.

console.log(Math.sqrt(245));


// Задача 3
// Дан следующий массив:
// [4, 2, 5, 19, 13, 0, 10]
// Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

const arr = [4, 2, 5, 19, 13, 0, 10];
let sumOfElementCubes = 0;// моя любимая переменная 
let result = 0;

for (const elem of arr) {
  sumOfElementCubes += Math.pow(elem, 3);
  result =  Math.sqrt(sumOfElementCubes);
   
}
console.log(result);

// Задача 4
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

const squareRoot = Math.sqrt(379);

console.log(Math.round(squareRoot));
console.log(squareRoot.toFixed(1));
console.log(squareRoot.toFixed(2));


// Задача 5
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

const squareRoot5 = Math.sqrt(587);

const obj = {
  'floor': Math.floor(squareRoot5),
  'ceil': Math.ceil(squareRoot5)
};

console.log(obj['floor'] + ', ' + obj['ceil']);


// Задача 6
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.max( 4, -2, 5, 19, -130, 0, 10));
console.log(Math.min( 4, -2, 5, 19, -130, 0, 10));

// Задача 7
// Выведите на экран случайное целое число от 1 до 100.

function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNum(1, 100));// сделала по примеру из учебника, как работает не разобралась


// Задача 8
// С помощью цикла заполните массив 10-ю случайными целыми числами.

const arr8 = [];

for (let i = 0; i < 10; i++ ) {
  arr8.push( Math.round( Math.random() * 100 ));
}

// console.log(arr8);


// Задача 9
// Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

const a = 6,
  b = -1;

// console.log(Math.abs(a));
// console.log(Math.abs(b));
// console.log(Math.abs(a - b));
