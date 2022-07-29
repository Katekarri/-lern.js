// https://code.mu/ru/javascript/book/prime/functions/return/

// №1
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

function getCubeNumber(num) {
  return num ** 3;
}

const res = getCubeNumber(3);
console.log(res); 


// №2
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

function getSquareRoot(num) {
  return Math.pow(num, 3);
}

const result = getSquareRoot(3) + getSquareRoot(4);
console.log(result);