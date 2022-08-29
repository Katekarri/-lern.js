// https://code.mu/ru/javascript/book/prime/enumeration/every/

// №1
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

const arr1 = [1, 6, 5, 12, -12, 3];

const result1 = arr1.every( function(elem) {
  return elem > 0;
});


// №2
// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.

const arr2 = [1, 2, 3, 4, 5];

const result2 = arr2.every( function(elem, index) {
  return elem * index < 30;
});