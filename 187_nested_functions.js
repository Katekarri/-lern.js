// https://code.mu/ru/javascript/book/prime/functions/nested-functions/

// №1
// Сделайте функцию func, которая параметрами будет принимать два числа, а возвращать сумму квадрата первого числа с кубом второго числа. Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, и вспомогательную функцию cube, возводящую число в куб.

function func(num1, num2) {
  function sqrt(num) {
  return num ** 2;
  };

  function cube(num) {
  return num ** 3;
  };
  return sqrt(num1) + cube(num2);
};
func(2,3);