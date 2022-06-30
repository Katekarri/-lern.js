// https://code.mu/ru/javascript/book/prime/loops/coding/

// Задача 1
// Дан массив:
// let arr = [10, 20, 30, 40, 21, 32, 51];
// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

const arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];  
  const char = String(num)[0];

  if (char === '1' || char === '2') {
    sum += num;   
  }
}
