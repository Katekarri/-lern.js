// https://code.mu/ru/javascript/book/prime/functions/function-returning-function/

// №1
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
	return function() {
		return 1;
	};
}


function func2() {
	return function() {
		return 2;
	};
}

console.log(func1()() + func2()())

// №2
// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

function func() {
	return function() {
		return function() {
      return function() {
         return function() {
           return '!';
         };
      };
    };
	};
};


console.log(func()()()()());

// №3
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.


function func(num) {
	return function(num1) {
		return function(num2) {
      return num + num1 + num2;
    };
  };
};



console.log(func(2)(3)(4));

// №4
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num) {
  let arr = [];
    return function(num1) {
      return function(num2) {
        return function(num3) {
          return function() {
           arr.push(num,num1,num2,num3);
               return arr;
          };
        };
      };
    };
  };
  
  console.log(func(2)(3)(4)(5)());