// https://code.mu/ru/javascript/book/prime/time/leap-year/

// №1
// Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, если этого год високосный, и false - если нет.

function isLeap(year) {
  return new Date(year, 1, 29).getDate() == 29;
}
// console.log(isLeap(2024));