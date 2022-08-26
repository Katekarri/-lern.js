// https://code.mu/ru/javascript/book/prime/destructuring/objects/default-values/

// №1
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

const options = {
  width:  400,
  height: 500,
};

const {color = 'black', width, height} = options;
// console.log(color);