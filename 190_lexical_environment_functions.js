// https://code.mu/ru/javascript/book/prime/functions/functions-lexical-environment/

// №1
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func());

3


// №2
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()());

3 //в начале решила что выведет в консоле function

// №3
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num1 = 1;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func = test();
// console.log(func());

3


// №4
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func = test();
// console.log(func());

1 //в начале было 2...может эту тему можешь объяснить, если время будет
