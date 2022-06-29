// https://code.mu/ru/javascript/book/prime/loops/array-elements-neighbors/



// Задача 1
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.


const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length-1; i++) {
  const nextArrayElement = arr1[i + 1];
    console.log(nextArrayElement);
   
}


// Задача 2
// Модифицруйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

const arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length-1; i++) {
  const sumElement = arr2[i] + arr2[i + 1];
  console.log(sumElement);
}


// Задача 3
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 2; i < arr3.length; i++) {
  const twoPreviousElements = arr3[i-2] + ',' + arr3[i-1];
    console.log(twoPreviousElements);
}



// Задача 4
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 2; i < arr4.length; i++) {
  const sumElements = arr4[i] + arr4[i-1] + arr4[i-2];
    console.log(sumElements);
}

// Задача 5
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 1; i < arr5.length; i++) {
  const  sumThreeElements = arr5[i-1] + arr5[i] + [i+1]; 
  console.log(sumThreeElements);
}