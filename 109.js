// Задача 1
// Сделайте функцию, выводящую на экран ваше имя.

function showName(name) {
  alert(name);
}
showName('Kate');

// Задача 2
// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
alert(getSum(100));
