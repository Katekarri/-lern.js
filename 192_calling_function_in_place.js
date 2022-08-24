// https://code.mu/ru/javascript/book/prime/functions/immediately-invoked-function-expression/

// №1
// Определите, не запуская код, что выведется в консоль:
// !function() {
// 	console.log('!');
// }();

//!


// №2
// Определите, не запуская код, что выведется в консоль:
// function() {
// 	console.log('!');
// }();

//ошибка - функция стала Function Declaratio без имени

// №3
// Определите, не запуская код, что выведется в консоль:
// let result = function() {
// 	return '!';
// }();
// console.log(result);

//!


// №4
// Определите, не запуская код, что выведется в консоль:
// let result = function() {
// 	return '!';
// };
// console.log(result);

//function, поскольку функция не вызывается

// №5
// Определите, не запуская код, что выведется в консоль:
// let result = function() {
// 	return '!';
// };	
// console.log(result());

//!


// №6
// Определите, не запуская код, что выведется в консоль:
// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);

//3


// №7
// Определите, не запуская код, что выведется в консоль:
// let result = (function() {
// 	return '!';
// }());
// console.log(result);

//!


// №8
// Определите, не запуская код, что выведется в консоль:
// let result = (function() {
// 	return '!';
// })();
// console.log(result);

//!


// №9
// Определите, не запуская код, что выведется в консоль:
// let result = (function() {
// 	return '!';
// });
// console.log(result);

//function


// №10
// Определите, не запуская код, что выведется в консоль:
// let result = (function() {
// 	return '!';
// });
// console.log(result());

//!


// №11
// Определите, не запуская код, что выведется в консоль:
// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);

//3


// №12
// Допишите следующий код так, чтобы его запуск алертом выводил '!':
// (function() {
// 	// какой-то код
// })()()();

(function() {
  return function() {
    return function() {
      console.log('!');
    }	
  };
})()()();


// №13
// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
// (function() {
// 	// какой-то код
// })(1)(2);


(function(num1) {
  return function(num2) {
    alert(num1 + num2);
  };
})(1)(2);


// №14
// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
// (function() {
// 	// какой-то код
// })(1)(2)(3);

(function(num1) {
  return function(num2) {
    return function(num3) {
      alert(num1 + num2 + num3);
    }
  };
})(1)(2)(3);


// №15
// Определите, не запуская код, что выведется в консоль:
// let str = 'str';
// (function() {
// 	console.log(1);
// })();

//1


// №16
// Определите, не запуская код, что выведется в консоль:
// let str = 'str'
// (function() {
// 	console.log(1);
// })();

// ошибка