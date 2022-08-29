// https://code.mu/ru/javascript/book/prime/time/format-changing/


// №1
// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

const str = '2022-08-27';
const date = str.split('-').reverse().join('.');

console.log(date);