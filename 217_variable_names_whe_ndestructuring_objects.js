// https://code.mu/ru/javascript/book/prime/destructuring/objects/variables-names/


// №1
// В следующем коде части объекта записываются в соответствующие переменные:
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let c = options.color;
// let w = options.width;
// let h = options.height;
// Переделайте этот код через деструктуризацию согласно изученной теории.

const options = {
    color: 'red',
    width:  400,
    height: 500,
  };

const {color: c, width: w, height: h} = options;
console.log(c, w, h);