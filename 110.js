// Задача 1
// Сделайте функцию, которая параметром принимает число и выводит на экран куб этого числа.

function cubeNumber(num) {
	alert(num * num *num);
}

// cubeNumber(4)

function cubeNumber(num) {
	alert(num ** 3);
}

// cubeNumber(4)

Math.pow(3, 3);//ваиант возведения в степень(Math.pow(x, y)
// x oснование степени.
//y показатель степени, в которую возводится основание x)

// Задача 2
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное.В первом случае пусть функция выводит на экран текст '+++', а во втором '---'.

function whatNumber(num) {
    if (num > 0) {
      alert('+++');
    } else if (num < 0) {
      alert('---');
    } else {
      alert('Это 0')
    }
}
//whatNumber(0);

// Задача 3
// Сделайте функцию, которая параметрами принимает 3 числа и выводит на экран сумму этих чисел.

function calculateSum(a, b, c) {
  alert(a + b + c);
}
// calculateSum(2, 6, 8);

// Задача 4
// Сделайте функцию func, которая параметром будет принимать 3 числа и выводить на экран их сумму. Пусть даны 3 переменные с числами:
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// С помощью созданной вами функции выведите на экран сумму значений эти переменных.

function func(a, b, c) {
  alert(a + b + c);
}
let param1 = 1;
let param2 = 2;
let param3 = 3;
func(param1, param2, param3);

// Задача 5
// Дана функция:
// function func(num = 5) {
// 	alert(num * num);
// }
// Эта функция вызывается следующим образом:
// func(2);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.
4; 9; 25(//используется значение по умолчанию в данном случае 5);

// Задача 6
// Дана функция:
// function func(num1 = 0, num2 = 0) {
// 	alert(num1 + num2);
// }
// Эта функция вызывается следующим образом:
// func(2, 3);
// func(3);
// func();
// Расскажите, каким будет результат каждого из вызовов функции.
5; 3; 0;