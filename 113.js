import { testMe } from './utils.js'

// Задача 1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function checkNum(arr) {  
  let finishArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
          finishArray.push(arr[i]);
          
        } else { 
          return false;
          break;
        }
  } 
   if(finishArray.length === arr.length) {
    return true;
    }
}

checkNum([8, 6, 10, 4, 2])

testMe(checkNum, [ 8, 6, 5, 4, 7], false)
testMe(checkNum, [ 8, 6, 10, 4, 2], true)
testMe(checkNum, [1, 3, 5, 7, 11], false)


// function checkNum(arr) {
//   finishArray = [];
// 	arr.forEach(function(num) {
//   	if(!(num % 2)) {
//     	finishArray.push(num)//массив.forEach(function(элемент, индекс, массив) {
//	код, который выполнится для всех элементов})
//     }
//   })
//   return finishArray;
// }
// checkNum([2,7,6,8,12,16])


// Задача 2
// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function checkNumbers(num){
  let flag = true;
  
let str = String(num);
  for (let i = 0; i < str.length; i++){
  
if(str[i] % 2 == 0){
flag = false;
    }
    
}return flag;
}
checkNumbers(86)



// Задача 3
// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function checkSameNumbers(arr){
  let flag = false;
  
for(let i = 0; i < arr.length; i++){

  if (arr[i] == arr[i + 1]) {
    flag = true;
    break;
  }
  
}return flag;
}

checkSameNumbers[19, 19, -93, 4, 1, 16, 77, 780, 43, 237, 56];