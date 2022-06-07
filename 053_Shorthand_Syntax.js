//https://code.mu/ru/javascript/book/prime/conditions/shorthand-syntax/

// Задача 1
// Если переменная test равна 10, то пусть на экран выведется слово 'верно'. В противном случае пусть ничего не произойдет.

const test = 10;
if (test == 10) {
  alert('верно');
}

// Задача 2
// Перепишите следующий код в сокращенной форме:
// if (test == 0) {
// 	alert('верно');
// } else {
// 	alert('неверно!');
// }

if (test == 0) 
  alert('верно');
else 
  alert('неверно!');

if (test == 0) alert('верно'); else alert('неверно!');


// Задача 3
// Перепишите следующий код в сокращенной форме:
// if (test == 0) {
// 	alert('верно');
// }

if (test == 0) 
  alert('верно');

  if (test == 0) alert('верно');
