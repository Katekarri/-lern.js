// https://code.mu/ru/javascript/book/prime/loops/array-for/

// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.


const arr1 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// Задача 2
// В следующем коде программист вывел в консоль все элементы массива:
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length; i++) {
// 	console.log(arr[i]);
// }
// В коде, однако, была допущена ошибка, которая привела к тому, что в последней итерации цикла почему-то выводится undefined, а не элемент массива. Исправьте ошибку программиста. Объясните, в чем он был не прав.


const arr = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr.length-1; i++) {
  console.log(arr[i]);
}
// Это количество элементов массива минус один. Почему мы отнимаем один? Потому что нумерация элементов начинается с нуля. То есть в нашем массиве 5 элементов и последний элемент имеет номер 4.

// Задача 3
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.

const arr3 = [1, 2, 3, 4, 5];

for (let i = 0; i <= arr3.length; i++) {
  if(i % 2 == 0) {
    console.log(arr3[i]);
  }  
}


// Задача 4
// Дан масив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

const arr4 = [1, 2, 3, 4, 5];
let sum = 1;

for (let i = 0; i < arr4.length; i++) {   
  sum *= arr4[i];
}

// Задача 5
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.


const arr5 = [1, 2, 3, 4, 5];
let sumNum = 0;

for (let i = 0; i < arr5.length; i++) {
  sumNum += arr5[i] **2; 
}


// Задача 6
// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

const arr6 = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 3 && arr6[i] < 10) {
    console.log (arr6[i]);
  }
}

for (let i = 0; i < arr6.length; i++) {
    const currentElement = arr6[i]
    if (currentElement > 3 && currentElement < 10) {
      console.log (currentElement);
    }
  }

// Задача 7
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

const arr7 = [4, -8, 7, 0, 3, -6];
let sumArr7 = 0;

for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0) {
    sumArr7 += arr7[i];  
  }   
}

// Задача 8
// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

const arr8 = [1, 2, 3, 4, 5];
let result = 0;

for (let i = 0; i < arr8.length; i++) {
  result += arr8[i];
}

const division = result / arr8.length; 
alert(division);


// Задача 9
// Дан массив числами, например:
// let arr = [10, 20, 30, 50, 235, 3000];
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.


const arr9 = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr9.length; i++) {
const firstDigit = String(arr9[i])[0];

  if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
  console.log(arr9[i]); 
  }
  
}


// Задача 10
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

// const arr10 = [1, 2, 3, 4, 5, 6];
// const reverseArr10 = arr10.reverse();

// console.log(reverseArr10);

const arr10 = [1, 2, 3, 4, 5, 6];
const reverseArr10 = [];

for (let i = arr10.length-1; i >= 0; i--) {
  reverseArr10.push(arr10[i]);
}

console.log(reverseArr10);


// Задача 11
// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

const arr11 = [1, 5, 3, 7, 10, 6];

for (let i = 0; i < arr11.length; i++) {
  if (arr11[i] == i + 1) {
    console.log(arr11[i]);
  }
}

// Задача 12
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.



const arr12 = [1, 5, 3, 7, 10, 6];
  for (let i = 0; i < arr12.length; i++) {
  const element = document.write(arr12[i]+'<br>');
  console.log(element);
}

//?????????

// Задача 13
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.

const arr13 = [1, 5, 3, 7, 10, 6];
  for (let i = 0; i <= arr13.length; i++) {
  document.write(arr13[i]+'<p>');
}

//?????????

// Задача 14
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let i = 0; i < daysOfTheWeek.length; i++) {
//   if (daysOfTheWeek[i] === 'Saturday' || daysOfTheWeek[i] === 'Sunday') {
//     document.write('<b>' + daysOfTheWeek[i]+ '</b>' +'<p>');
// } else { document.write(daysOfTheWeek[i]+'<p>');}
// }



const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let i = 0; i < daysOfTheWeek.length; i++) {
  let currentDay = daysOfTheWeek[i]
  if (currentDay === 'Saturday' || currentDay === 'Sunday') {
    currentDay = `<b>${currentDay}</b>`
  }
  document.write(`<p>${currentDay}</p>`)
}


// Задача 15
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const day = 'Saturday';
for (let i = 0; i < daysOfWeek.length; i++) {
  let today = daysOfWeek[i];
  if (today === day) {
    today = `<i>${today}</i>`;
  }
  document.write(`<p>${today}</p>`)
} 


// const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// const day = 'Saturday';
// for (let i = 0; i < daysOfWeek.length; i++) {
//   let today = daysOfWeek[i];
//   if (today === day) {
//     document.write('<em>' + today + '</em>' + '<p>');
//   } else { document.write(today+'<p>');}
// } 



















