//https://code.mu/ru/javascript/book/prime/conditions/if-else-combinations/

// Задача 1
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day;
if (day <= 11 && day > 0) {
  alert('First decade');
}

if (day > 11 && day <= 20) {
  alert('Second decade');
}

if (day > 20 && day <= 31) {
  alert('Third decade');
}


// Задача 2
// Решите предыдущую задачу на декады месяца через конструкцию else if.

let day;
if (day > 0 && day <= 11) {
  alert('First decade');
} else if (day > 11 && day <= 20) {
  alert('Second decade');
} else if (day > 20 && day <= 31) {
  alert('Third decade');
} 


// Задача 3
// Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.


let day;
if (day > 0 && day <= 11) {
  alert('First decade');
} else if (day > 11 && day <= 20) {
  alert('Second decade');
} else if (day > 20 && day <= 31) {
  alert('Third decade');
} else {
  alert('error'); 
}


// Задача 4
// Пусть в переменной num хранится число. Если это число не попадает в диапазон от 10 до 99, то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.

let num;
let string = num + '';
if (string < 10 || string > 99) {
  alert('num меньше 10 или больше 99'); 
} else if (string > 10 && string < 99) {
  const sumNum = Number(string[0]) + Number(string[0]);
  if (sumNum <= 9) {
    alert ('Сумма цифр num однозначна');
  } else {
    alert ('Сумма цифр num двузначна');
  }
} 