// https://code.mu/ru/javascript/book/prime/time/date-formatting/

// №1
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

function addZero(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

const date = new Date();

console.log(
  addZero(date.getHours()) + ':' +
  addZero(date.getMinutes()) + ':' +
  addZero(date.getSeconds()) + ' ' +
  addZero(date.getgetDate()) + '.' + 
  addZero(date.getMonth() + 1) + '.' +
  addZero(date.getFullYear())
);
