// https://code.mu/ru/javascript/book/prime/functions/nested-functions-scope/

// №1
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num = 1;
// 	function func() {
// 		console.log(num);
// 	}
// 	func();
// }
// test();

1


// №2
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num = 1;	
// 	function func() {
// 		console.log(num);
// 	}
// }
// test();

//undefined, поскольку функция func не вызвана


// №3
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num = 1;
// 	function func() {
// 		console.log(num);
// 	}
// 	func();
// }

//undefined, поскольку функция test не вызвана


// №4
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let num;
// 	function func() {
// 		console.log(num);
// 	}
// 	num = 1
// 	func();	
// 	num = 2
// 	func();
// }
// test();

1
2


// №5
// Определите, не запуская код, что выведется в консоль:
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
// 	func();
// }
// test(1, 2);

3


// №6
// Определите, не запуская код, что выведется в консоль:
// function test(num1, num2) {
// 	function func() {
// 		console.log(num1 + num2);
// 	}
// 	num1 = 2;
// 	func();
// }
// test(1, 2);

4 //поскольку пепременной num1 присваевается  значение 2


// №7
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num);
// }
// test(1);

1


// №8
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		console.log(localNum);
// 	}
// 	func(num + 1);
// }
// test(1);

2


// №9
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		console.log(num);
// 	}
// 	func(num + 1);
// }
// test(1);

1//переменная localNum локальн. Ее изменения не будут приводить ни к каким изменениям во внешней функции


// №10
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

1


// №11
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}	
// 	func(num);
// 	console.log(localNum);
// }
// test(1);

//undefined - переменная localNum локальная 


// №12
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(localNum) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

2

// №13
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}	
// 	func(num);
// }
// test(1);

1


// №14
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(num) {
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

1


// №15
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	num = 2;
// 	func(num);
// }
// test(1);

2


// №16
// Определите, не запуская код, что выведется в консоль:
// function test(num) {
// 	function func(num) {
// 		console.log(num);
// 	}
// 	func(num);
// 	num = 2;
// }
// test(1);

1 //в начале 2 подумала 