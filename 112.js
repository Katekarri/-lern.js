// Задача 1
// Напишите функцию, которая будет находить сумму квадратов элементов массива.

function squareSum(num) {
  let x = 0; 

  for (let i = 0; i < num.length; i++) {
    // let y = num[i]; //вносим в переменную текущее число 
    // y**=2; //возводим во вторую степень
    // x += y; //увеличиваем переменную х 
     x += num[i]**2
  }
   return x;
}
console.log(squareSum([4]));



function testMe(func, arg, expected) {
  const result = func(arg)
  
  if (result != expected) {
    console.log(`function ${func.name}(${arg}) returned ${result} but not ${expected}`)
  }
}
testMe(squareSum, [4], true);
testMe(squareSum, [5], true);
testMe(squareSum, [2], true);



// Задача 2
// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num) {
    let sum = 0; 
  let str = String(num); 
  
    for(let i = 0; i < str.length; i++)
      sum += Number(str[i]);//аждый символ преобразовываем в число и прибавляем к общей сумме
    return sum;
}
// getDigitsSum(67)

function testMe(func, arg, expected) {
  const result = func(arg)
  
  if (result != expected) {
    console.log(`function ${func.name}(${arg}) returned ${result} but not ${expected}`)
  }
}
testMe(getDigitsSum, 7, true);
testMe(getDigitsSum, 805, true);
testMe(getDigitsSum, 23, true);

// Задача 3
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]

// Задача 4
// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(str) {
return str.split('').reverse().join('');//Метод split осуществляет разбиение строки в массив по указанному разделителю.
//reverse переворачивает массив;
//join -- собирает строку из массива.
}
//  reverseStr('vhbvljn')

// Задача 5
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// Задача 6
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function funk(end) {
  let x = [];
  
    for(let i = 1; i <= end; i++){ 
         x.push(i);       
    }  
 return x
}
console.log(funk(5))

function testMe(func, arg, expected) {
  const result = func(arg)
  
  if (result != expected) {
    console.log(`function ${func.name}(${arg}) returned ${result} but not ${expected}`)
  }
}
testMe(funk, 7, true);
testMe(funk, 2, true);
testMe(funk, 10, true);

// Задача 7
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

function funk(start, end) {
  let x = [];
  
    for(let i = 1; i<=end; i++){ 
         x.push(i);       
    }  
 return x
}
console.log(funk(1, 5))