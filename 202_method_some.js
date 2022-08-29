// https://code.mu/ru/javascript/book/prime/enumeration/some/

// №1
// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

const arr1 = [-1, -6, 9, 0, 65];

const result1 = arr1.some( function(elem) {
  return elem > 0;
});

// №2
// Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.


const arr2 = [-1, -6, 9, 0, 65];

const result2 = arr2.some( function(elem, index) {
  return elem * index > 30;
});