// https://code.mu/ru/javascript/book/prime/multidimensionality/multi-objects-iteration/


// Задача 1
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// Используя циклы, найдите сумму элементов этого объекта.

const obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
};
let result = 0;

for (let key in obj1) { 
  let subObj1 = obj1[key];             

  for (let subKey in subObj1) {
    result += subObj1[subKey];
  }
}
console.log(result);