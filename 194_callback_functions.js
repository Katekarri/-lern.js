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


// const arr = ['start', 'middle', 'end'];
// function each(arr, callback){
// const result = [];
  
// for (const elem of arr) {
//  result.push(callback(elem));
// }
// return result;
// }
// const a = each(arr, function(str) { 
//   let result = '';
//   for (let i = str.length - 1; i >= 0 ; i--) { 
//     result += str[i]
//   }
// return result;
// });

// alert(a);

// №3
// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.



// №4
// С помощью следующей функции возведите все элементы массива в куб:
// function cube(num) {
// 	return num ** 3;
// }