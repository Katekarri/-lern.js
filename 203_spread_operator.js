// https://code.mu/ru/javascript/book/prime/ellipsis/spread/


// №1
// Дан массив:
// let arr = [1, 2, 3, 4, 5];
// Дана также функция:
// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// Найдите с помощью приведенной функции сумму элементов массива.

const arr1 = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
  const sum = num1 + num2 + num3 + num4 + num5
  return sum;
}
func(...arr1)

// №2
// Не запуская код, определите, что выведется в консоль:
// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }
// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

260


// №3
// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

const arr2 = [1, 2, 3, -4, 5, 0]
const mim = Math.min(...arr2);
console.log(mim)