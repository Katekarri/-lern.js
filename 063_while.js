// https://code.mu/ru/javascript/book/prime/loops/while/

// Задача 1
// Выведите в консоль числа от 1 до 100.

let i = 1;

while (i <= 100) {
  console.log(i);
  i ++;
}

// Задача 2
// Выведите в консоль числа от 11 до 33.

let j = 11;

while (j <= 33) {
  console.log(j);
  j++;
}

// Задача 3
// Выведите в консоль четные числа в промежутке от 0 до 100.

let k = 0;

while (k <= 100) {
  console.log(k);
  k += 2;
}

// Задача 4
// Выведите в консоль нечетные числа в промежутке от 1 до 99.

let y = 1;

while (y <= 99) {
  if (y % 2 === 1) {
    console.log(y);
  }
  y ++;
}


// Задача 5
// Выведите в консоль числа от 30 до 0.

let f = 30;

while (f >= 0) {
  console.log(f);
  f--;
}