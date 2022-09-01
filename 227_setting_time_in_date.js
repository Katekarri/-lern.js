// https://code.mu/ru/javascript/book/prime/time/time-setting/

// №1
// Узнайте, какой день недели был в ваш день рождения.

const date = new Date(1985, 5, 24);
const day = date.getDay();
const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

console.log(days[day]);