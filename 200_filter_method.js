// https://code.mu/ru/javascript/book/prime/enumeration/filter/

// №1
// Дан массив с числами. Оставьте в нем только положительные числа.

const arr1 = [-1, 2, -3, 4, 5];
let result1 = arr1.filter(function(elem) {
	return elem > 0;
});


// №2
// Дан массив с числами. Оставьте в нем только отрицательные числа.

const arr2 = [-1, 2, -3, 4, 5];
const result2 = arr2.filter(function(elem) {
	return elem < 0;
});


// №3
// Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10.

const arr3 = [-1, 2, -3, 4, 5, 13];
const result3 = arr3.filter(function(elem) {
  return elem > 0 && elem < 10;
});


// №4
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов

const arr4 = ['vv', 'jnjjcczjv', 'd', 'zvxvzbbz', 'vxvxbxcv'];
const result14 = arr4.filter(function(elem) {
  return elem.length > 5;
});

// const arr4 = ['vv', 'jnjjcczjv', 'd', 'zvxvzbbz', 'vxvxbxcv'];
// const result14 = arr4.filter(elem => elem.length > 5);
// console.log(result14);

// №5
// Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.

const arr5 = [21, 3, 65, 789, 11];
const result5 = arr5.filter(function(elem, index) {
  if (elem * index < 30) {
    return elem;
  }
});

// const arr5 = [21, 3, 65, 789, 11];
// const result5 = arr5.filter((elem, index) => elem * index < 30);

// console.log(result5);
  

// №6
// Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы.

const arr6 = [1, 2, [3, 4], 5, [6, 7]];
const result6 = arr6.filter(elem => typeof elem != 'object');
console.log(result6);


// №7
// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.