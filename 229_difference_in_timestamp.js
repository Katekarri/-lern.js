// https://code.mu/ru/javascript/book/prime/time/timestamp-difference/


// №1
// Выведите на экран количество дней, прошедшее между 1 марта 1988 года и 10 января 2000 года.

const firstDate = new Date(2000, 1, 10);
const secondtDate = new Date(1988, 3, 1);
const diff = firstDate.getTime() - secondtDate.getTime();
console.log(diff / (24 * 60 * 60 * 1000));


// №2
// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.

const date = new Date();
const bddDate = new Date(1985, 5, 24);
const diffMonth = date.getTime() - bddDate.getTime();
console.log(Math.floor(diffMonth / (1000 * 60 * 60 * 24 * 30)))
