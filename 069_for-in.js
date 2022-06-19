// https://code.mu/ru/javascript/book/prime/loops/for-in/


// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// С помощью цикла for-in найдите сумму элементов этого объекта.

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sumElem = 0;

for (let key in obj) {
  sumElem += obj[key];
}