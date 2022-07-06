// https://code.mu/ru/javascript/book/prime/multidimensionality/multi-arrays-iteration/


// Задача 1
// Дан двухмерный массив с числами:
// let arr = [[1, 2, 3], [4, 5], [6]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

const arr1 = [[1, 2, 3], [4, 5], [6]];
let sumElemeFromSubArr1 = 0;

for (let subArr1 of arr1) {
  for (let elemeFromSubArr1 of subArr1) {
    sumElemeFromSubArr1 += elemeFromSubArr1;
  }
}


// Задача 2
// Дан трехмерный массив с числами:
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

const arr2 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumElemfromSubSubArr2 = 0;

for (let subArr2 of arr2) {
  for (let subSubArr2 of subArr2) {
    for (let elemfromSubSubArr2 of subSubArr2) {
      sumElemfromSubSubArr2 += elemfromSubSubArr2;
    }
  }
}

// Задача 3
// Решите предыдущие две задачи через цикл for.

const arr3 = [[1, 2, 3], [4, 5], [6]];
let sumElemeArr3 = 0;

for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3[i].length; j++) {
    sumElemeArr3 += arr3[i][j];
  }
}


const arr4 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumElemArr4 = 0;

for (let i = 0; i < arr4.length; i++) {
  for (let j = 0; j < arr4[i].length; j++) {
    for (let k = 0; k < arr4[i][j].length; k++) {
      sumElemArr4 += arr4[i][j][k];
    }
  }
}