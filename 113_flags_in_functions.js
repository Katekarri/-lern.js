// https://code.mu/ru/javascript/book/prime/functions/flags/

// №1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function checEvenNumbersInArr(arr) {
  let allEvenNumbers = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      allEvenNumbers = false;
      break;
    }
  } 
  return allEvenNumbers;
}

const arr = [2, 5, 6, 6];

console.log(checEvenNumbersInArr(arr));

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
    if (arr3[i] === arr3[i - 1]) {
      pairedElements = true;
    }
  }
  return pairedElements;
}

const arr3 = [1,2,undefined];
// const arr3 = [1, 2, 5];
console.log(checPairedElementsTogether(arr3));
