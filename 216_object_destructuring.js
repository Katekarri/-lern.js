// https://code.mu/ru/javascript/book/prime/destructuring/objects/intro/

// №1
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let color  = options.color;
// let width  = options.width;
// let height = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

const options = {
  color: 'red',
  width:  400,
  height: 500,
};

const {color, width, height} = options;
// console.log(color, width, height);