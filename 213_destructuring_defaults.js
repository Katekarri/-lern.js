// https://code.mu/ru/javascript/book/prime/destructuring/arrays/default-values/


// №1
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории


//если честно не весьма понятно ... ведь под индексом 3 в массиве 'programmer'... надо пометь значение , или указать  переменной значение по умолчанию 4? 

const arr = ['John', 'Smit', 'development'];
const [name, surname, department, position = 'trainee'] = arr;
console.log(position);