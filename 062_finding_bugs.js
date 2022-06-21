// https://code.mu/ru/javascript/book/prime/conditions/mistakes/

// Задача 1
// Код должен проверить сумму чисел:
// let num1 = 1;
// let num2 = 2;
// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//const num1 = 1;
//const num2 = 2;

// Задача 2
// Код должен проверить сумму чисел:
// let num1 = 1;
// let num2 = 2;
// if (num1 + num1 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// ??(num1 + num2 === 3);


// Задача 3
// Код должен проверить сумму чисел:
// let num1 = '1';
// let num2 = '2';
// if (num1 + num2 === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }


//Опять не понятна задача, код срабатывает, else
//if (Number(num1) + Number(num2) === 3);



// Задача 4
// Код должен проверить сумму чисел:
// let num1 = '1';
// let num2 = '2';
// if (Number(num1 + num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (Number(num1) + Number(num2) === 3);

// Задача 5
// Код должен проверить первую цифру числа:
// let num = 123;
// if (num[0] === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num[0] === 1));

// Задача 6
// Код должен проверить первую цифру числа:
// let num = 123;
// if (String(num[0]) === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num[0] === 1));


// Задача 7
// Код должен проверить первую цифру числа:
// let num = 123;
// if (String(num)[0] === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num[0] === 1));

// Задача 8
// Код должен проверить первую цифру числа:
// let num = 123;
// let first = String(num)[0];
// if (first === 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (first === String(1));

// Задача 9
// Код должен проверить, что в числе ровно две цифры:
// let num = 12;
// if (num.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num.length === 2));


// Задача 10
// Код должен проверить, что в числе ровно две цифры:
// let num = 12;
// let str = Number(str);
// if (str.length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//let str = String(num);

// Задача 11
// Код должен проверить, что в числе ровно две цифры:
// let num = 12;
// if (String(num.length) === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num.length === 2))

// Задача 12
// Код должен проверить, что в числе ровно две цифры:
// let num = 12;
// if (String(num).length === String(2)) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num.length === 2));

// Задача 13
// Код должен проверить, что в числе ровно две цифры:
// let num = 12;
// if (String(num).lenght === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

//if (String(num.length === 2));

// Задача 14
// Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел:
// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
// let sum1 = num[0] + num[1] + num[2];
// let sum2 = num[3] + num[4] + num[5];
// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

//let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
//let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);