// https://code.mu/ru/javascript/book/prime/destructuring/arrays/function-result/


// №1
// В следующем коде части массива записываются в соответствующие переменные:
// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let arr = func();
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переделайте этот код через деструктуризацию согласно изученной теории.

function func() {
  return ['John', 'Smit', 'development', 'programmer', 2000];
}
const [name, surname, department, position, salary] = func();

// console.log(name);  
// console.log(surname); 
// console.log(department);
// console.log(position);
// console.log(salary);