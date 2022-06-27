// https://code.mu/ru/javascript/book/prime/loops/arbitrary-iterations-number/

// Задача 1
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

let num = 32;
let numberOfIterations = 0;
while (num < 1000) {
  num *= 3;
  numberOfIterations++;
}
console.log(numberOfIterations);


// Задача 2
// Решите предыдущую задачу через цикл for.

for (var number = 7, i = 0; number < 1000; number *= 3, i++);
console.log(i);


let num2 = 32;

for (var i = 0;; i++){ 
  if(num2 <= 1000) {
    num2*=3
  } else {
    break;
  }
};

// console.log(i);

// let num2 = 32;
// let result = 0;
// for (; num2 <= 1000; result++) {
//   num2 *= 3;
// }
// console.log(result)
