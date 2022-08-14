// https://code.mu/ru/javascript/book/prime/functions/closures/

// №1
// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.(Давайте перепишем рассмотренный нами код так, чтобы возвращаемая функция каждый раз увеличивала значение переменной num на единицу)

function increaseNumber() {
  let num = 1;
  return function() {
    console.log(num);
    num ++;
  };
};

const func = increaseNumber();

func(); 
func(); 


// №2
// Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

function test() {
  let num = 10;
  
  return function() {
    alert(num);
    num--;
  }
}

const func2 = test();
func2();
func2();
func2();

// №3
// Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.


function test() {
  let num = 10;
  
  return function() {
      if (num < 0) {
       return console.log('Отсчет окончен');
      }
      console.log(num);
      num--;
  }
}
 
const func3 = test();

func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();
func3();


// №4
// Определите, не запуская код, что выведется в консоль:
// function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };
// func()();
// func()();
// func()();

0/0/0 //каждый раз  создается функция со своим замыканием и  вызывается эта функция

// №5
// Определите, не запуская код, что выведется в консоль:
// function func() {
// 	let num = 0;
// 	return function() {
// 		console.log(num);
// 		num++;
// 	};
// };
// let test = func;
// test()();
// test()();
// test()();

0/0/0

// №6
// Определите, не запуская код, что выведется в консоль:
// let counter = 0;
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// };
// let func = test;
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

0/1/2/3 // лексические окружения возвращаемых функций ссылаются на одну и ту же переменную, любые изменения с этой переменной будут видны во всех функциях

// №7
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let counter = 0;
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test()();
// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

0/1/2/3

// №8
// Определите, не запуская код, что выведется в консоль:
// function test() {
// 	let counter = 0;
// 	return function() {
// 		return function() {
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test();
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

0/1/2/3