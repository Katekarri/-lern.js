// https://code.mu/ru/javascript/book/prime/loops/for-of/#top

// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.

const arr1 = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr1) {
  console.log(elem);
}

// Задача 2
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

const arr2 = [1, 2, 3, 4, 5];
let sumArr2 = 0;

for (let elem of arr2) {
  sumArr2 += elem;
}

// Задача 3
// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.


const arrMonths = ['January', 'February', 'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September' ,'October' ,'November' ,'December'];
for (let i = 0; i < arrMonths.length; i++) {
    console.log(arrMonths[i]);
}


// Задача 4
// Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

const arrAllMonths =  ['January', 'February', 'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September' ,'October' ,'November' ,'December'];

const month = 'October';
const october =  arrAllMonths[9];
// const month = 10; ????
for (let i = 0; i < arrAllMonths.length; i++) {
  let thisMonth = arrAllMonths[i];
  if (thisMonth === month) {
    thisMonth = `<em>${thisMonth}</em>`;
  }
  document.write(`<p>${thisMonth}</p>`)
}

// const arrAllMonths = ['January', 'February', 'March' ,'April' ,'May' ,'June' ,'July' ,'August' ,'September' ,'October' ,'November' ,'December'];

// for(let elem of arrAllMonths) {
//   const month = 10;
//   if (elem == month) {
//     elem = `<em>${elem}</em>`;    
//   }
//     document.write(`<p>${elem}</p>`);
// }














