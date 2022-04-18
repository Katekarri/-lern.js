// Задача 1
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа.С помощью этой функции найдите куб числа 3 и запишите его в переменную result.

function cubeNumber(num) {
  return num ** num;
}
let result = cubeNumber(3);
// alert(result);


// Задача 2
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа.С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.

function calculateSquareRoot(num) {
  return num / 2;
}
let result1 = calculateSquareRoot(3);
let result2 = calculateSquareRoot(4);
let result3 = result1 + result2;
alert(result3);

// Задача 3
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}

let result4 = round(sqrt(2));
alert(result4);

// Задача 4
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.



// Задача 6
// Что выведется на экран в результате выполнения следующего кода:
// function func(num) {
// 	return num;	
// 	let result = num * num;
// 	return result;
// }
// alert( func(3) );
// Объясните почему.

// Задача 7
// Что выведет каждый из алертов в результате выполнения следующего кода:
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num * num;
// 	}
// }
// alert( func(10) );
// alert( func(-5) );
// Объясните почему.

// Задача 8
// Что выведет каждый из алертов в результате выполнения следующего кода:
// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
// 	return num * num;
// }
// alert( func(10) );
// alert( func(-5) );
// Объясните почему.

// Задача 9
// Что выведется на экран в результате выполнения следующего кода:
// function func(num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// alert( func(5) );
// Объясните почему.Что хотел сделать автор данного кода ? Исправьте ошибку автора.

// Задача 10
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
  
// Задача 11
// Дана следующая функция:
// function func(num1, num2) {
// 	let result;
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;
// 	}	
// 	return result;
// }

// alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.