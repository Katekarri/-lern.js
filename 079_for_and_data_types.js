// https://code.mu/ru/javascript/book/prime/loops/for-data-types/

// Задача 1
// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

for (let i = 10; i <= 1000; i++) {

  let str = String(i);
  if (Number(str[0]) + Number(str[1]) === 5) {
    console.log(i);
  }
}

// Задача 2
// Переберите циклом числа от 1 до 30 и сложите их как строки.

let str = '';
for (let i = 1; i <= 30; i++) {
  str += i;   
}
