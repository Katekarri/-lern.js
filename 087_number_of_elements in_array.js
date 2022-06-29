// https://code.mu/ru/javascript/book/prime/loops/array-elements-counting/

// Задача 1
// Дан следующий массив:
// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.


const arr1 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr1) {
  if (elem === 3) {
    counter++;
  }
}

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

const arr2 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter2 = 0;

for (let elem of arr2) {
    if (elem === 3 || elem === 2) {
        counter2++;
    }
}

console.log(counter2);

// Задача 3
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

// const str = 'модифицируйте предыдущую задачу';
// const arr3 = Array.from(str);
// let counter3 = {};

// for (let elem of arr3) {
//   if (counter3[elem] === undefined) {
//     counter3[elem] = 1;
//   } else {
//     counter3[elem]++;
//   }
// }

const str = 'модифицируйте предыдущую задачу';
const counter3 = {};
 
for (let i = 0; i < str.length; i++) {
  key = str[i];
 
	if (counter3[key]) {  // В объекте есть эта буква	
			counter3[key]++;

	} else {// В объекте такой буквы нет, добавляем букву в объект
		  counter3[key] = 1;
	}
}
	 console.log(counter3)
