// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.

let example1 = ['a', 'b', 'c', 'd', 'e'];
for (let numbers of example1) {
  console.log(numbers);
}

// Задача 2
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

let example2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let result of example2) {
  sum += result; 
}
console.log(sum)

// Задача 3
// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

let example3 = ['January', 'February' ,'March','April' ,'May' ,'June' ,'August' ,'September' ,'October' ,'November' ,'December' ];
for (let result of example3) {
  console.log(result);
}
 

// Задача 4
// Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите заглавными буквами. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.


let months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
let month = 10;
if (i = 0; i < months.length; i++) {
  
 } else {
  month = months[10];
  alert(month.toUpperCase());
}


// let months = [
//   'January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'
// ];
// let month = 10;
// for (i = 0; i < 12; i++) {
//   alert(months)
//  if (i === (month -1 ))
//   alert(month.toUpperCase());
// }

