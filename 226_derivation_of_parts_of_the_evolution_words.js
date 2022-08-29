// https://code.mu/ru/javascript/book/prime/time/word-date-output/

// №1
// Пусть дан следующий массив:
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// Выведите с помощью этого массива название текущего месяца.

const date = new Date();
const month  = date.getMonth();
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[month]);

// с английскими мне показалось актуальнее, если надо переделать обратно на рус переделаю