//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

// The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000

// Цель состоит в том, чтобы создать функцию двух входных данных числа и мощности, которая "возводит" число в степень (т.е. умножает число на само себя в степени).


function numberToPower(number, power) {
  let sum = 1;
  for (let i = 0; i <= power; i++) {
    sum *= number;
  }
  return sum;
}