// Задача 1
// Есть массив a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].
// Выведите все элементы, которые меньше 5.

let example1 = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
for (i = 0; i < example1.length; i++){
  if (example1[i] < 5)
  console.log(example1[i]);
}

// Задача 2
// Даны массивы:
// a = [ 8, 13, 21, 34, 55, 89];
// b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].
// Нужно вернуть массив, который состоит из элементов, общих для этих двух массивов.

let a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let arrayOfCommonElement = [];
for (i = 0; i < a.length; i++){
  for (y = 0; y < b.length; y++){
    if (a[i] == b[y]) {
     arrayOfCommonElement = a[i], b[y];
      console.log(arrayOfCommonElement)
   }
  }
}


// Задача 3
// Отсортируйте массив по значению в порядке возрастания и убывания.

let example2 = [19, 8, -93, 4, 1, 16, 77, 780, 43, 237, 56];
let arr3 = [];
for (i = 0; i <= example2.length; i++){

}


// Задача 4
// Выведите "Да"" если стрка полиндром и "Нет", если строка не является полиндромом. Палиндром — это слово или фраза, которые одинаково читаются слева направо и справа налево.

//шалаш

// Задача 5
// Вы принимаете от пользователя последовательность чисел, разделённых запятой, т.е строка состоящая из чисел и запятых. Составьте массив с этими числами.

// Задача 6 (это не через for)
// При заданном целом числе n посчитайте n + nn + nnn

let example16 = String(84);
let sum6 = Number(example16) + Number(example16 + example16) + Number(example16 + example16 + example16);
alert(sum6);

// Задача 7
// Дан массив, выводите чётные числа из заданного массива, а если встречаете число 237, то остановитесь.

let example4 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
for (let i = 0; i <= example4.length; i++) {
  if (i % 2 == 0) {
    alert(example4[i]);
  }
  if (example4[i] == 237) {
    alert('Вот оно');
    break;
  }  
}


// Задача 8
// Дано 2 массива, выводите все элементы первого, которых нет во втором.

// Задача 9
// Сложите цифры целого числа.

let exampel9 = String(865);
let sum = 0;
for (let i = 0; i < exampel9.length; i++) {
  sum += Number(exampel9[i]);
}
// alert(sum);


// Задача 10
// Посчитайте, сколько раз символ встречается в строке.

const exampel10 = 'Sunny day jfngoidj usnnd';
const symbolToCheck = 'n';
let numberOfTimes = 0;
for (i = 0; i <= exampel10.length; i++){
  if (exampel10[i] == symbolToCheck) {
    numberOfTimes += 1;
   
  }
}
// numberOfTimes = numberOfTimes.length

 console.log(numberOfTimes)


// Задача 11
// Нужно проверить, все ли числа в массиве уникальны.
let example11 = [19, 8, 93, 4, 1, 16, 8, 77, 780, 43, 237, 56];



// a = [ 8, 13, 21, 34, 55, 89];
// b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].


// Задача 12
// Дан массив чисел. Выведите значение наибольшего элемента в списке, а затем индекс этого элемента в списке. Если наибольших элементов несколько, выведите индекс первого из них.

let example12 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
let maxNumber = example12[0];
for (i = 0; i < example12.length; i++){
  if (example12[i] > maxNumber) {
    maxNumber = example12[i];  
  }  
}
console.log(maxNumber)
console.log(example12.indexOf(maxNumber))



// Задача 13
// В массиве все элементы различны. Поменяйте местами минимальный и максимальный элемент этого списка.
let example13 = [19, 8, 93, 4, 1, 16, 77, 780, 43, 237, 56];
minNumber = 1;
maxNumber = 780;
minNumberIndex = example13.indexOf(minNumber);//4
maxNumberIndex = example13.indexOf(maxNumber);//7
example13[maxNumberIndex] = minNumber;
exampel13[minNumberIndex ] = maxNumber;
