// https://code.mu/ru/javascript/book/prime/inbuilt/practicum/

// Задача 1
// Преобразуйте последнюю букву строки в верхний регистр.

const strins1 = 'summer';
const newString1 = strins1.slice(0, 1).toUpperCase() + strins1.slice(1);

console.log(newString1)


// Задача 2
// Преобразуйте первые 2 буквы строки в верхний регистр.

const strins2 = 'summer';
const newString2 = strins2.slice(0, 2).toUpperCase() + strins2.slice(2);

console.log(newString2);


// Задача 3
// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.

const strins3 = 'London'; 
const newString3 = strins3.slice(0, 1).toLocaleLowerCase() + strins3.slice(1);

console.log(newString3);

// Задача 4
//let str = 'word1 word2 word3';
//Давайте напишем код, который преобразует первую букву каждого слова в верхний регистр. 

const string4 = 'word1 word2 word3';
const arr4 = string4.split(' ');

for (let i = 0; i < arr4.length; i++) {
  let words = arr4[i];
	words = words.slice(0, 1).toUpperCase() + words.slice(1);
}

const newstring4 = arr4.join(' ');
console.log(newstring4);//каша из методов... и не работает все таки, пол дня проковырялась


// Задача 5
// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).



// Задача 6
// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.



// Задача 7
// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.