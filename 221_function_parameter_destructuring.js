// https://code.mu/ru/javascript/book/prime/destructuring/function-parameters/


// №1
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );

func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
  console.log(salary);
}


// №2
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let info     = employee[2];
// }
// func( ['John', 'Smit', 'development', 'programmer', 2000] );


func( ['John', 'Smit', 'development', 'programmer', 2000] );
function func([name, surname, info]) {
  console.log(name);
  console.log(surname);
  console.log(info);
  
}


// №3
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position;
// 	if (arr[3] !== undefined) {
// 		position = arr[3];
// 	} else {
// 		position = 'джуниор';
// 	}
// }
// func( ['John', 'Smit', 'development'] );

func( ['John', 'Smit', 'development'] );
function func([name, surname, info, position = 'джуниор']) {
  console.log(name);
  console.log(surname);
  console.log(info);
  console.log(position);
  
}


// №4
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(department, employee, hired) {
// 	let name     = employee[0];
// 	let surname  = employee[1];
// 	let year  = hired[0];
// 	let month = hired[1];
// 	let day   = hired[2];
// }
// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

func( 'development', ['John', 'Smit'], [2018, 12, 31] );
function func(department,[name, surname] ,[year, month, day]) {
  console.log(department); 
  console.log(name); 
  console.log(surname);  
  
  console.log(year);  
  console.log(month); 
  console.log(day);
}

 
// №5
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let color  = options.color;
// 	let width  = options.width;
// 	let height = options.height;
// }
// func( {color: 'red', width: 400, height: 500} );

func( {color: 'red', width: 400, height: 500} );

function func({color, width, height}) {
console.log(color);
console.log(width);
console.log(height);
}


// №6
// Переделайте следующий код через деструктуризацию согласно изученной теории:
// function func(options) {
// 	let width  = options.width;
// 	let height = options.height;
// 	let color;
// 	if (options.color !== undefined) {
// 		color = options.color;
// 	} else {
// 		color = 'black';
// 	}
// }
// func( {color: 'red', width: 400, height: 500} );


func( { width: 400, height: 500} );
function func({color = 'black', width, height}) {
console.log(color);
console.log(width);
console.log(height);
}