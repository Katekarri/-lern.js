// Задача 1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.//массив.forEach(function(элемент, индекс, массив) {
//	код, который выполнится для всех элементов})


function checkNum(arr) {
  finishArray = [];
	arr.forEach(function(num) {
  	if(!(num % 2)) {
    	finishArray.push(num)
    }
  })
  return finishArray;
}
checkNum([2,7,6,8,12,16])
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
  }
  
}return flag;
}

checkSameNumbers[19, 19, -93, 4, 1, 16, 77, 780, 43, 237, 56];