// https://code.mu/ru/javascript/book/prime/loops/debugging/#top



// Задача 1
// Исправьте ошибки, допущенные в следующем коде:
// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
// 	if (elem[0] === '1' && elem[0] === '2') {
// 		sum += +elem;
// 	}
// }
// console.log(sum);
  

let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (elem[0] === '1' && elem[0] === '2') {
		sum += +elem;
	}
}
console.log(sum);