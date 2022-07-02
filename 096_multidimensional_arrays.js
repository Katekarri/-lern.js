// https://code.mu/ru/javascript/book/prime/multidimensionality/multi-arrays/

// Задача 1
// Дан следующий массив:
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.

const arr1 = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

let elementStr = arr1[3][2] + ',' + arr1[1][1] + ',' + arr1[2][0] + ',' + arr1[0][0];
console.log(elementStr);




// Задача 2
// Дан следующий массив:
// let arr = [[1, 2], [3, 4], [5, 6]];
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

const arr2 = [[1, 2], [3, 4], [5, 6]];

const sumElements = arr2[0][0] + arr2[0][1] + arr2[1][0] + arr2[1][1] + arr2[2][0] + arr2[2][1];
console.log(sumElements);

// const arr = [[1, 2], [3, 4], [5, 6]];
// let result = 0;

// for (let elem of arr) {
//   for (let subElem of elem) {
//     result += subElem;
//   }
// }



// Задача 3
// Дан следующий массив:
// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.


const arr3 = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

const sumElements3 = arr3[0][0][0] + arr3[0][0][1] + arr3[0][1][0] + arr3[0][1][1] + arr3[1][0][0] + arr3[1][0][1] + arr3[1][1][0] + arr3[1][1][1];

//думала сума тут сойду))))

// const arr3 = [ [ [1, 2], [3, 4], ], [ [5, 6], [7, 8], ], ];
// let result3 = 0;

// for (let elem of arr3) {
//   for (let subElem of elem) {
//     for (let subSubElem of subElem) {
//       result3 += subSubElem;}
//   }
// }


// Задача 4
// Дан следующий массив:
// let arr = [[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]];
// Вручную, без цикла, найдите сумму элементов этого массива.


55