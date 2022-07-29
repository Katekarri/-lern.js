// https://code.mu/ru/javascript/book/prime/functions/parameters/

// №1
// Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

function getCubeNumber(num) {
  console.log(num ** 3)
}

// getCubeNumber(2)

// №2
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

function func(num) {
  if (num > 0) {
    console.log('+++');
  } else {
    console.log('---');
  }
}