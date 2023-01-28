//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
//Division by zero should return NaN.

//Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего значения на меньшее.
//Деление на ноль должно возвращать NaN.

function remainder(a, b) {
  if (a > b){
    return a % b;
  } if (b > a) {
    return b % a;
  } else {
    return NaN;
  }  
}