
// 1. Заполните массив 10-ю иксами с помощью цикла

let example1 = [];
for (i = 0; i < 10 ;  i++) {
  example1[i] = 'x';
}
// console.log(example1);



let example1a = [];
example1a.push('x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x');
// console.log(example1a);


let example1b = [];
for (let i = 0; i < 10; i++) {
    example1b.push('x');
}
// console.log(example1b);


// 2. Заполните массив числами от 1 до 10 с помощью цикла


let example2a = [];
for(i = 1; i <= 10; i++) {
  example2a.push(i);
}
// console.log(example2a)


// 3. Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

let example3 = [73, 51, 7, 8, -15, -145, 1];
for (let i = 0; i < example3.length; i++) {
  if (example3[i] > 0 && example3[i] < 10) {//число<10 и  число>0
  console.log(example3[i]);
  }   
}

// 4. Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите

let example4 = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i <= example4.length; i++) {
  if (example4[i] == 5) {
    alert('Есть!');
    break;
  }
  
}

// 5. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива

let example5 = [3, 4, 51, 6, 7];
let sum = 0;
for (let i = 0; i < example5.length; i++) {
  sum += example5[i];
}
// console.log(sum);

// 6. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива

let example6 = [1, 2, 3, 4, 5];
let sum6 = 0;
for (let i = 0; i < example6.length; i++) {
  sum6 += example6[i]**2;
}
console.log(sum6);



// 7.Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let example7 = [1, 2, 3, 7, 6, 9];
let sum7 = 0;
for ( i = 0; i < example7.length; i++) {
	sum7 += example7[i];
}
let result = sum7 / example7.length;
// console.log(result);