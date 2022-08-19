// https://code.mu/ru/javascript/book/prime/functions/recursion/


// №1
// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии выведите элементы этого массива в консоль.

const arr = [1, 2, 3, 4, 5];

function func(arr) {
  console.log(arr.shift(), arr);
  
  if (arr.length != 0) {
    func(arr);
  }
}

func(arr);


// №2
// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью рекурсии найдите сумму квадратов элементов этого массива.

// const arr2 = [1, 2, 3, 4, 5];
// function getCube(arr2) {
//   let sum = 0, 
//       i = arr2.length;
//   while (i--) 
//    sum += Math.pow(arr2[i], 3);
//   return sum;
// }
 
// console.log(getCube(arr2)); 


const arr2 = [1, 2, 3, 4, 5];

function getSum(arr2) {
  const sumArr = arr2.map(i => i**3);
  const sum = sumArr.reduce((prev, count) => prev + count);  
  return sum;
}

// console.log(getSum(arr2));
// console.log(arr2);