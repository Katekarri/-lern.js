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

const str = 'модифицируйте предыдущую задачу';
const arr3 = Array.from(str);
let counter3 = {};

for (let elem of arr3) {
  if (counter3[elem] === undefined) {
    counter3[elem] = 1;
  } else {
    counter3[elem]++;
  }
}
//!!!!!!По этому поводу есть вопрос, если значении у нас установлено как неизвестно, как  потом ему присвается единица, а потом при наличии нескольких одинаковых она увеличивается. Если изначально не известно... Принцип работы понятен,понятно что данный способ может работать с любой длиной строки. Но все равно полная картина не складывается




