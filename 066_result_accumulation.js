// https://code.mu/ru/javascript/book/prime/loops/result-loop-accumulation/

// Задача 1
// Найдите произведение целых чисел от 1 до 20.

let result = 0;

for (let i = 0; i <= 20; i++) {
  result += i;   
}

// Задача 2
// Найдите сумму четных чисел от 2 до 100.

let sum = 0;

for (let i = 2; i <= 100; i += 2) {
  sum += i;
}

// Задача 3
// Найдите сумму нечетных чисел от 1 до 99.

let sumNum = 0;

for (let i = 1; i <= 99; i += 2) {
  sumNum += i;
}