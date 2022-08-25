// https://code.mu/ru/javascript/book/prime/destructuring/arrays/skip-elements/

// №1
// В следующем коде части массива записываются в соответствующие переменные:
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let department = arr[2];
// let position   = arr[3];
// Переделайте этот код через деструктуризацию согласно изученной теории.

const arr = ['John', 'Smit', 'development', 'programmer', 2000];
const [,,department,position] = arr;

// console.log(department);
// console.log(position);