// https://code.mu/ru/javascript/book/prime/functions/mistakes/

// №1
// Код должен найти сумму результатов работы двух функций:
// function func1() {
// 	console.log(3);
// }
// function func2() {
// 	console.log(5);
// }
// console.log( func1() + func2() );


function func1(num) {
	return num;
}
const a = func1(3); 

function func2(num) {
	return num;
}
const b = func2(5);

console.log(a + b);


// №2
// Код должен найти сумму элементов массива:
// function sum(arr) {
// 	let res = 0;	
// 	for (let elem of arr) {
// 		res += elem;
// 		return res;
// 	}
// }
// console.log(sum([1, 2, 3, 4, 5]));

function sum(arr) {
	let res = 0;	
	for (const elem of arr) {
		res += elem;
	}
  		return res;
}
console.log(sum([1, 2, 3, 4, 5]));


// №3
// Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	console.log(res);
// }

const arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	for (const elem of arr) {
		res += elem;
	}
	console.log(res);
}

func(arr);


// №4
// Код должен найти сумму результатов работы двух функций:
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log( func1 + func2 );

function func1(num) {
	return num;
}
const c = func1(3); 

function func2(num) {
	return num;
}
const d = func2(5);

console.log(c + d);



// №5
// Код должен найти сумму элементов массива:
// let sum = sum([1, 2, 3, 4, 5]);
// console.log(sum);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return elem;
// }

const arr5 = [1, 2, 3, 4, 5];

function func(arr5) {
	let sum = 0;
	for (let elem of arr5) {
		sum += elem;
	}
	console.log(sum);
}

func(arr5)


// №6
// Код должен найти сумму элементов массива:
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// }


const arr6 = [1, 2, 3, 4, 5];

function func(arr6) {
	let sum = 0;
	for (let elem of arr6) {
		sum += elem;
	}
	console.log(sum);
}

func(arr6)


// №7
// Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// }

function add(num) {
	if (num <= 9 || num >= 1) {
		return '0' + num;
	} 
  if ( num > 9) {
    return num;
  }
}

add(num)
console.log(num);

// №8
// Код должен найти сумму элементов массива:
// let arr = [1, 2, 3, 4, 5];
// let sum = sum(arr);
// console.log(sum);
// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}	
// 	return res;
// }

const arr8 = [1, 2, 3, 4, 5];

function func(arr8) {
	let sum = 0;
	for (let elem of arr8) {
		sum += elem;
	}
	console.log(sum);
}

func(arr8)


