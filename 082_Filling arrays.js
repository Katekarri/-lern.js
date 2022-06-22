// https://code.mu/ru/javascript/book/prime/loops/array-loop-filling/

// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10.

// let arr1 = [];

// arr1[0] = 1;
// arr1[1] = 2;
// arr1[2] = 3;
// arr1[3] = 4;
// arr1[4] = 5;
// arr1[5] = 6;
// arr1[6] = 7;
// arr1[7] = 8;
// arr1[8] = 9;
// arr1[9] = 10;


let arr1 = [];

for (let i = 1; i <= 10; i++) {
  arr1[i] = i;
}
console.log(arr1);


// Задача 2
// Объявите пустой массив, а затем заполните его 5-ю буквами x.

let arr2 = [];
const str = 'x';
for (let i = 0; i <= 4; i++) {
  arr2[i] = str;
}
console.log(arr2);


// Задача 3
// С помощью цикла заполните массив числами от 1 до 100.

let arr3 = [];

for (let i = 1; i <= 100; i++) {
  arr3[i] = i;
}


// Задача 4
// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr4 = [];

for (let i = 1, j = 0; i <= 99; i += 2, j++) {
  arr4[j] = i;
}
console.log(arr4);
