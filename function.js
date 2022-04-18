// Задача 1
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?
нет - две функии работают одинаково (age > 18) и возвращают результат 

// Задача 2
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?  Синтаксис оператора:
// condition ? val1 : val2
// нельзя использовать continue или break
// Если condition (условие) - истина, то оператор принимает значение val1. В противном случае оператор принимает значение val2. Вы можете использовать условный оператор во всех случаях, где может быть использован стандартный оператор.
// Используя оператор ||( возвращает первое истинное значение или последнее, если такое значение не найдено.)

function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?') || confirm('уверен?');
  
}
// checkAge(12)

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
// checkAge(1)
// checkAge(22)

// Задача 3

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
  if (a < b) {
    return a;  
  } else {
    return b; 
  }
}

function min(a, b) {
  return a < b ? a : b;
}

// Задача 4
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow(x, n) {
  return x ** n;
}
// pow(3,2);

let pow2 = (x, n) => x ** n;
// alert( pow2(3,3) ); 

// Задача 5 Стрелочные функции
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Вы согласны?",
//   function() { alert("Вы согласились."); },
//   function() { alert("Вы отменили выполнение."); }
// );

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
() => alert("Вы отменили выполнение."),
);