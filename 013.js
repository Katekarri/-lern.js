//task 1
//Задача 1js.Pm.Bs.SCh

// Дана строка 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.

let str = 'abcde'
alert(str[0]); 
alert(str[2]); 
alert(str[4]);

//task 2
//Задача 2js.Pm.Bs.SCh
// Дана переменная со строкой 'abcde'. Обращаясь к отдельным символамэтой строки запишите в новую переменную символы этой строки в обратном порядке, то есть 'edcba'.

 str = 'abcde' 
let newStr = '';
for (let i = str.length - 1; i >= 0; i--) { 
  newStr += str[i];
}
let str2 = 'abcde' 
let newStr2 = '';
for (let character of str2) {
  newStr2 = character + newStr2;
  console.log(newStr2);
}

//task 3
//Задача 3js.Pm.Bs.SCh
// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

 str = 'abcde';
 num = 2;
alert(str[num]);

//task 4
//Задача 4js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее последний символ.

 str = 'catfish';
alert(str[str.length - 1]);

//task 5
// Задача 5js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее предпоследний символ.

 str = 'catfish';
alert(str[str.length - 2]);

//task 6
// Задача 6js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее предпредпоследний символ.

 str = 'catfish';
alert(str[str.length - 3]);

//task 7
// Задача 7js.Pm.Bs.SCh
// Дана строка '12345'. Найдите сумму цифр этой строки no = '12345';

alert(no[0] + no[1] + no[2] + no[3] + no[4]);

numStr = '123456';
sumNum = 0;
for (let i = 0; i <= numStr.length - 1; i++) {

  sumNum += Number(numStr[i])
  
}
alert(sumNum)

//task 8
// Задача 8js.Pm.Bs.SCh
// Дано число 12345. Найдите сумму цифр этого числа.

 no = String(12345);
alert(Number(no[0]) + Number(no[1]) + Number(no[2]) + Number(no[3]) + Number(no[3]));
  
numStr = String(12345);
sumNum = 0;
for (let i = 0; i <= numStr.length - 1; i++) {

  sumNum += Number(numStr[i])
  
}
alert(sumNum)

//task 9
// Задача 9js.Pm.Bs.SCh
// Дано число 12345. Найдите произведение цифр этого числа.

let no = String(12345);
alert(no[0] * no[1] * no[2] * no[3] * no[4]);


numStr = String(12345);
sumNum = 1;
for (let i = 0; i <= numStr.length - 1; i++) {

  sumNum *= Number(numStr[i])
  
}
alert(sumNum)


let stringNumber = String(12345);
let box = 1;
for (let digit of stringNumber) {
  box *= digit; 
}
console.log(Number(box))

//task 10
// Задача 10js.Pm.Bs.SCh
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.

	 console.log(Number(String(12345).split("").reverse().join("")));
//split("")преобразует строку в массив символов
//reverse()сли числа расположены по порядку, то эта функция переворачивает элементы в массиве в обратном порядке.
//join("") это объединяет перевернутые символы в единый строковый тип данных.

let abc = String(12345); 
let newNamber = '';
for (let i = abc.length - 1; i >= 0; i++) { 
  newNamber += abc[i];
}

newNamber = Number(newNamber)



let num = 12345;
function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
console.log(getReversedNum(num));//нашла решение из интернета
// 1) result = 5 num = 1234
// 2) result = 54 num = 123
// 3) result = 543 num = 12
// 4) result = 5432 num = 1
// 5) result = 54321 num = 0


str = 'ab38ck1142z';
zero = 0;
for (let symbol of str) {
  let result = Number(symbol);
  if (result) {
    zero += result;  
  }
}
console.log(zero)