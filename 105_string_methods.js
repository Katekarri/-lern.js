// https://code.mu/ru/javascript/book/prime/inbuilt/string/

// Задача 1
// Дана строка 'js'. Сделайте из нее строку 'JS'.

const string1 = 'js';

console.log(string1.toUpperCase());

// Задача 2
// Дана строка 'JS'. Сделайте из нее строку 'js'.

const string2 = 'JS';

console.log(string2.toLowerCase());


// Задача 3
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

const string3 = 'я учу javascript!';

const sub1 = string3.substr(2,3);
const sub2 = string3.substr(5,11);

const sub3 = string3.substring(2,5);
const sub4 = string3.substring(5,16);

const sub5 = string3.slice(2,5);
const sub6 = string3.slice(5,16);


// Задача 4
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

const string4 = 'abcde';

console.log(string4.indexOf('c'));

// Задача 5
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.

const string5 = 'abcde';
const a = 'a';

if (string5.indexOf(a) >= 0) {
  console.log('There is this character "a" in the string');
 
} else {
  console.log('The string does not contain "a"');
}

// Задача 6
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

const string6 = 'abcde';
const firstCharacter = 'a';

if (string6.indexOf(firstCharacter) === 0) {
  console.log('There string starts with character "a"');
 
} else {
  console.log('The string does not character with "a"');
}


// Задача 7
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

const string7 = 'abcde';
const lastCharacter = 'a';

if (string7.lastIndexOf(lastCharacter) === string7.length-1) { //4
  console.log('There string ends with character "a"');
 
} else {
  console.log('The string does not ends with "a"');
}


// Задача 8
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

const string8 = 'http://frttttuy';
const startOfString = 'http://';

if (string8.indexOf(startOfString) === 0) {
  console.log('The string starts is this character "http://" ');
 
} else {
  console.log('The string does not starts is this character "http://"');
}


// Задача 9
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.


const string9 = 'doc.html';
const lastCharacters = '.html';

if (string9.lastIndexOf(lastCharacters) === string9.length-lastCharacters.length) { 
  console.log('There string ends with characters ".html"');
 
} else {
  console.log('The string does not ends with ".html"');
}


// Задача 10
// Дана строка. Проверьте, начинается ли эта строка на 'http://'.



// Задача 11
// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.



// Задача 12
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.



// Задача 13
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.



// Задача 14
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.