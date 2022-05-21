// Задача 1
// Сделайте функцию func, которая будет возвращать через return какую-либо строку.

function returnString() {
 const string = 'hello';
  return string;
}
returnString()

// Задача 2
// Выведите результат работы функции func алертом на экран.

function functionResult() {
  alert('hello');
}
functionResult()


// Задача 3
// Выведите исходный код функции func алертом на экран.

function returnFunctionCod() {
 const string3 = 'hello';
  return string3;
}
alert(returnFunctionCod)


// Задача 4
// Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func на экран.

function getResultNum(num) {
  return num;
}
getResultNum('321')

getResultNum = '123';
alert(getResultNum);


// Задача 5
// Сделайте функцию func1, которая будет возвращать через return число 3.

function func1(num) {
  return num;
}
func1(3)

// Задача 6
// Скопируйте исходный код функции func1, в переменную func2.

 function func3(num) {
  return num;
}
func3(3)
let func2 = func3;
alert(func2);

// Задача 7
// Выведите на экран сумму результатов работы функций func1 и func2.

function func4() {
  const a = 5;
  return a;
}
func4();

function func5() {
  const b = 5;
  return b;
}
func5();

alert(func4() + func5());


// Задача 8
// Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

let func6 = function(){
return 1;
};//понадобилось время ))))

// Задача 9
// Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

let func7 = function(){
return 1;
};

// Задача 10
// Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом на экран.

let func8 = function(){
return 1;
};

let func9 = function(){
return 1;
};

alert(func8() + func9());