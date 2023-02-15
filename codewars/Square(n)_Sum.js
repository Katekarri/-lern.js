//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//Завершите функцию квадратной суммы, чтобы она возводила в квадрат каждое переданное ей число, а затем суммировала результаты.

function squareSum(numbers) {
  let sum = 0;
  for ( let i = 0; i < numbers.length; i++) {
      sum += numbers[i] **2;
  }
  return sum;
}

squareSum([1,2,3]);