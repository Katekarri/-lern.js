// https://code.mu/ru/javascript/book/prime/enumeration/map/


// №1
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.

const arr = [1, 2, 3, 4, 5];
const result = arr.map(function(elem) {
  return Math.sqrt(elem);  
});
// console.log(result);

// №2
// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

const arr2 = ['a', 'b', 'abc'];
const result2 = arr2.map(function(elem) {
  return elem = elem + '!'; 
});

// console.log(result2);

// №3
// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

const arr3 = ['abrc', 'bxd', 'fdr'];
const result3 = arr3.map(function(elem) {
  return elem = elem.split('').reverse().join('');
});
// console.log(result3);


// №4
// Дан следующий массив:
// let arr = ['123', '456', '789'];
// Используя метод map преобразуйте этот массив в следующий:
// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];

// const arr4 = ['123', '456', '789'];
// const result4 = arr4.map(function(elem) {
// elem = elem.split('');
// }
// что то сложно пока разобраться 



// №5
// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.

const arr5 = [1, 2, 3, 4, 5];
const result5 = arr5.map(function(elem, index) {
  return elem = elem * index;
});

console.log(result5);