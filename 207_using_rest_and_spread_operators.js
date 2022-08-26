// https://code.mu/ru/javascript/book/prime/ellipsis/spread-rest-applying/


// №1
// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

function func(...nums) {
  let sum = 0;
  const length = nums.length;
  for (let num of nums) {
    sum += num;
  }
  
  return sum / length;
}

const result = func(1, 2, 3);
console.log(result);