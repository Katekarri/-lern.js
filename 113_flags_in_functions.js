// https://code.mu/ru/javascript/book/prime/functions/flags/

// №1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function checNumbersInArr(arr) {
  let  allNumbersPositive = true;
  for (const elem of arr) {
    if (elem < 0) {
      allNumbersPositive = false;
    }  
  }
   return allNumbersPositive;  
}

const arr = [1, 2, 3, 4];
// const arr = [1, 2, -3, 4];
console.log(checNumbersInArr(arr));

// №2
// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function checOddNumbers(num) {
  let oddNumbers = true;
  const str = String(num);
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      oddNumbers = false;
    }
  }
  return oddNumbers;
}

const num = 153;
// const num = 222;
console.log(checOddNumbers(num));

// №3
// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function checPairedElementsTogether(arr3) {
  let pairedElements = false;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === arr3[i + 1]) {
      pairedElements = true;
    }
  }
  return pairedElements;
}

// const arr3 = [1, 2, 2, 5];
const arr3 = [1, 2, 5];
console.log(checPairedElementsTogether(arr3));
