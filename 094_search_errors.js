// https://code.mu/ru/javascript/book/prime/loops/mistakes/

// Задача 1
// Код должен вывести числа от 0 до 10:
// for (let i = 0; i > 10; i++) {
// 	console.log(i);
// }

for (let i = 0; i <= 10; i++) {
	console.log(i);
}


// Задача 2
// Код должен вывести числа от 10 до 0:
// for (let i = 10; i > 0; i++) {
// 	console.log(i);
// }

for (let i = 10; i >= 0; i--) {
	console.log(i);
}


// Задача 3
// Код должен вывести числа от 10 до 0:
// for (let i = 10; i == 0; i--) {
// 	console.log(i);
// }

for (let i = 10; i >= 0; i--) {
	console.log(i);
}


// Задача 4
// Код должен вывести числа от 0 до 10:
// let i = 0;
// while (i >= 10) {
// 	console.log(i);
// 	i++;
// }

let i = 0;

while (i <= 10) {
	console.log(i);
	i++;
}

// Задача 5
// Код должен найти сумму целых чисел от 1 до 10:
// let res;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }
// console.log(res);

let res = 0;

for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);


// Задача 6
// Код должен найти произведение целых чисел от 1 до 10:
// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
// console.log(res);


let res6 = 1;
for (let i = 1; i <= 10; i++) {
	res6 *= i;
}
console.log(res6);


// Задача 7
// Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += elem;
// }
// console.log(sum); // должно вывести 15


const arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
	sum += +elem;
}
console.log(sum);


// Задача 8
// Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = '';
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum); // должно вывести 15

const arr8 = ['1', '2', '3', '4', '5'];
let sum8 = 0;

for (let elem of arr8) {
	sum8 += +elem;
}
console.log(sum8);


// Задача 9
// Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum = +elem;
// }
// console.log(sum); // должно вывести 15


const arr9 = ['1', '2', '3', '4', '5'];
let sum9 = 0;

for (let elem of arr9) {
	sum9 += +elem;
}
console.log(sum9);


// Задача 10
// Код должен найти сумму элементов массива, однако, всегда выводит NaN:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит NaN

const arr10 = ['1', '2', '3', '4', '5'];
let sum10 = 0;
for (let i = 0; i < arr10.length; i++) {
  
	sum10 += +arr10[i];
}
console.log(sum10);


// Задача 11
// Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length - 1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum); // почему-то выводит не 15


let arr11 = ['1', '2', '3', '4', '5'];
let sum11 = 0;
for (let i = 0; i < arr11.length; i++) {
  
	sum11 += +arr11[i];
}
console.log(sum11);



// Задача 12
// Код должен найти сумму элементов массива:
// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +i;
// }
// console.log(sum); // почему-то выводит не 15

const arr12 = ['1', '2', '3', '4', '5'];
let sum12 = 0;
for (let i = 0; i < arr12.length; i++) {
  
	sum12 += +arr12[i];
}
console.log(sum12);


// Задача 13
// Код должен возвести в квадрат каждый элемент массива:
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	elem = elem ** 2;
// }
// console.log(arr);

// const arr13 = [1, 2, 3, 4, 5];
// let result = 0;
// for (let elem of arr13) {
// 	result = elem ** 2;
//   console.log(result);
// }


const arr13= [1, 2, 3, 4, 5];
  console.log(arr13.map(function (elem){
  return Math.pow(elem,2);
}));


// Задача 14
// Код должен заполнить массив числами от 1 до 5:
// let arr;
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

const arr14 = [];
for (let i = 1; i <= 5; i++) {
	arr14.push(i);
}
console.log(arr14);



// Задача 15
// Код должен найти сумму элементов объекта:
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += elem;
// }
// console.log(sum);


const obj15 = {a: 1, b: 2, c: 3};
let sum15 = 0;
for (let elem in obj15) {
	sum15 += +obj15[elem];
}
console.log(sum15);



// Задача 16
// Код должен найти сумму элементов объекта:
// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum = +obj.key;
// }
// console.log(sum);

const obj16 = {a: 1, b: 2, c: 3};
let sum16 = 0;
for (let key in obj16) {
	sum16 += +obj16[key];
}
console.log(sum16);



// Задача 17
// Код должен проверить, есть ли в массиве число 3 или нет:
// let arr = [1, 2, 3, 4, 5];
// let res = '';
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+++';
// 	} else {
// 		res = '---';
// 	}
// }
// console.log(res);

const arr17 = [1, 2, 3, 4, 5];
let res17 = '';
for (let elem of arr17) {
	if (elem === 3) {
		res17 = '+++';
    break;
	} else {
		res17 = '---';  
	}
}
 console.log(res17);


// Задача 18
// Код должен проверить, есть ли в массиве число 3 или нет:
// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		let res = true;
// 		break;
// 	}
// }
// console.log(res);


const arr18 = [1, 2, 3, 4, 5];
let res18 = true;;
for (let elem of arr18) {
	if (elem === 3) {
		res18 = true;
		break;
	} else {
    res18 = false;
  }
}
console.log(res18);


// Задача 19
// Код должен вывести только четные элементы из массива:
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	if (elem % 2 = 0) {
// 		console.log(elem);
// 	}
// }

const arr19 = [1, 2, 3, 4, 5];

for (let elem of arr19) {
	if (elem % 2 === 0) {
		console.log(elem);
	}
}