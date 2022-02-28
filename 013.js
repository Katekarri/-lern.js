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

let str = 'abcde' 
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

let str = 'abcde';
let num = 2;
alert(str[num]);

//task 4
//Задача 4js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее последний символ.

let str = 'catfish';
alert(str[str.length - 1]);

//task 5
// Задача 5js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее предпоследний символ.

let str = 'catfish';
alert(str[str.length - 2]);

//task 6
// Задача 6js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее предпредпоследний символ.

let str = 'catfish';
alert(str[str.length - 3]);

//task 7
// Задача 7js.Pm.Bs.SCh
// Дана строка '12345'. Найдите сумму цифр этой строки.

let no = '12345';
alert(no[0] + no[1] + no[2] + no[3] + no[4]);

//task 8
// Задача 8js.Pm.Bs.SCh
// Дано число 12345. Найдите сумму цифр этого числа.

let no = String(12345);
alert(Number(no[0]) + Number(no[1]) + Number(no[2]) + Number(no[3]) + 
  
//task 9
// Задача 9js.Pm.Bs.SCh
// Дано число 12345. Найдите произведение цифр этого числа.

let no = String(12345);
alert(no[0] * no[1] * no[2] * no[3] * no[4]);

//task 10
// Задача 10js.Pm.Bs.SCh
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.

	 console.log(String(12345).split("").reverse().join(""));
//split("")преобразует строку в массив символов
//reverse()сли числа расположены по порядку, то эта функция переворачивает элементы в массиве в обратном порядке.
//join("") это объединяет перевернутые символы в единый строковый тип данных.

let namber = String(12345); 
let newNamber = '';
for (let i = namber.length - 1; i >= 0; i--) { 
  newNamber += Number(namber[i]);
}



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