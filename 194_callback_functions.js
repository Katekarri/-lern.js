// https://code.mu/ru/javascript/book/prime/functions/callbacks/

// №1
// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

function each(arr, callback) {
  const result = [];
  
  for (let elem of arr) {
    result.push(callback(elem));
  }	
  return result;
}

const result = each([1, 2, 3, 4, 5], function(num) {
  return num * 2;
});

// console.log(result);


// №2
// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.


const arr = ['cats', 'dogs', 'pats'];
function each(arr, callback){
const result = [];
  
for (const elem of arr) {
  result.push(callback(elem));
}
return result;
}
const gettingReversedStrings = each(arr, function(str) { 
  let result = '';
  for (let i = str.length-1; i >= 0; i--) { 
    result += str[i]
  }
return result;
});

// alert(gettingReversedStrings);

// №3
// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

const arr3 = ['cats', 'dogs', 'pats'];
function each(arr3, callback) {
const result = [];
  
for (const elem of arr3) {
  result.push(callback(elem));
}
return result;
}

const gettingFirstCapitaLetter = (each(arr3, function(str) {
  let result = str.slice(0,1).toUpperCase() + str.slice(1);
  return result;
}));

// alert(gettingFirstCapitaLetter);


// №4
// С помощью следующей функции возведите все элементы массива в куб:
// function cube(num) {
// 	return num ** 3;
// }

// function each(arr, callback) {
//   const arrayOfCubeNumbers = [];
  
//   for (let elem of arr) {
//     arrayOfCubeNumbers.push( callback(elem) ); 
//   }
//   return arrayOfCubeNumbers;
// }

// function cube(num) {
//   return num ** 3;
// }

// const arrayOfCubeNumbers = each([1, 2, 3, 4, 5], cube);
// console.log(arrayOfCubeNumbers);


function each(arr) {  
  return arr.map(function(i){
    return i ** 3
  });
}

const arrayOfCubeNumbers = each([1, 2, 3, 4, 5]);
console.log(arrayOfCubeNumbers);

// function each(arr) {  
//   return arr.map(i => i ** 3);
// }

// const arrayOfCubeNumbers = each([1, 2, 3, 4, 5]);
// console.log(arrayOfCubeNumbers);