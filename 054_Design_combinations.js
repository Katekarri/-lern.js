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
  alert('third decade');
}


// Задача 2
// Решите предыдущую задачу на декады месяца через конструкцию else if.

let month;
if (month > 0 && month <= 11) {
  alert('First decade');
} else if (month > 11 && month <= 20) {
  alert('Second decade');
} else if (month > 20 && month <= 31) {
  alert('third decade');
} 


// Задача 3
// Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.


let monthNumber;
if (monthNumber > 0 && monthNumber <= 11) {
  alert('First decade');
} else if (monthNumber > 11 && monthNumber <= 20) {
  alert('Second decade');
} else if (monthNumber > 20 && monthNumber <= 31) {
  alert('third decade');
} else {
  alert('arror'); 
}


// Задача 4
// Пусть в переменной num хранится число. Если это число не попадает в диапазон от 10 до 99, то выведите на экран сообщение об этом. Если же число попадает в указанный диапазон, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите на экран сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двузначна.

let num;
if (num < 10 || num > 99) {
  alert('num меньше 10 или больше 99'); 
} else if (num > 10 && num < 99) {
  let sumNum = Number(num[0]) + Number(num[0]);
  if (sumNum <= 9) {
    alert ('Сумма цифр num однозначна');
  } else {
    alert ('Сумма цифр num двузначна');
  }
} 
 