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
alert(str[4]); 
alert(str[3]); 
alert(str[2]);
alert(str[1]); 
alert(str[0]); 


//task 3
//Задача 3js.Pm.Bs.SCh
// Дана переменная str со строкой 'abcde' и переменная num с номером символа. Выведите на экран символ, номер которого хранится в переменной num.

let str = 'abcde'
let num = 4;
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
alert(str[5]);
alert(str[str.length - 2]);//?

//task 6
// Задача 6js.Pm.Bs.SCh
// Дана строка. Выведите на экран ее предпредпоследний символ.
let str = 'catfish';
alert(str[4]);
alert(str[str.length - 3]);

//task 7
// Задача 7js.Pm.Bs.SCh
// Дана строка '12345'. Найдите сумму цифр этой строки.

let no = '12345'; 
alert(Number(no[0]) + Number(no[1])+ Number(no[2])+ Number(no[3]) + Number(no[4]));

//task 8
// Задача 8js.Pm.Bs.SCh
// Дано число 12345. Найдите сумму цифр этого числа.

let test = String(12345);
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));

//task 9
// Задача 9js.Pm.Bs.SCh
// Дано число 12345. Найдите произведение цифр этого числа.

let no = String(12345);
alert(no[0] * no[1]* no[2]* no[2]* no[3]* no[4]);

//task 10
// Задача 10js.Pm.Bs.SCh
// Дано число 12345. Переставьте цифры этого числа в обратном порядке.

let no = String(12345);
alert(no[4]+ no[3]+ no[2]+ no[1]+ no[0]);
