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


function getСubeElem(arr) {
  let sum = arr.shift() ** 3;
  if (arr.length !== 0) {    
    sum += getСubeElem(arr);
  }
  
  return sum;
}

console.log(getСubeElem([1, 2, 3, 4, 5]));