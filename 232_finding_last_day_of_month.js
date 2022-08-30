// https://code.mu/ru/javascript/book/prime/time/month-last-day/


// №1
// Оформите этот способ решения проблемы в виде функции, которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.


function lastDay(year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}
console.log(lastDay(2022, 8));


// №2
// Определите, какой день недели будет в последнем дне пятого месяца 2025 года.


function lastDayInMay(year, month) {
  const date = new Date(year, month + 1, 0);
  return a = date.getDate();
}

lastDayInMay(2025, 4)

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

const  date = new Date(2025, 4, a);
console.log(getWeekDay(date));
