// https://code.mu/ru/javascript/book/prime/loops/nested/

// Задача 1
// С помощью двух вложенных циклов выведите на экран следующую строку:
// 111222333444555666777888999

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(j)
    }
}

// Задача 2
// С помощью двух вложенных циклов выведите на экран следующую строку:
// 11 12 13 21 22 23 31 32 33


let str = '';

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    str += String(i) + String(j) + ' ';
  }
}

console.log(str);

