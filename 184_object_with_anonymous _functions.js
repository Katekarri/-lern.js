// https://code.mu/ru/javascript/book/prime/functions/functions-object/

// №1
// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.

const object = {
  func1: function() {
    return 1;
  },
  func2: function() {
    return 2;
  },
  func3: function() {
    return 3;
  }
};

console.log(object.func1() + object.func2() + object.func3());


// №2
// Переберите созданный объект циклом и выведите результаты работы функций в консоль.

for (const key in object) {
  console.log(object[key]());
};


// for (const func in Object.values(object)) {
//   console.log(func());
// };

// №3
// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

const arr = [1, 2, 3];
const obj = {
getSumOfElem: function(arr) { 
  let sum = 0;
  for (const elem of arr) {
    sum += elem;
  } 
  return sum;
},
getSqrtOfElem: function(arr) {
  let sum = 0;
  for (const elem of arr) {
    sum += elem * elem;
  }
  return sum;
},
getCubeOfElem: function(arr) { 
  let sum = 0;
  for (const elem of arr) {
    sum += elem * elem * elem;
  }
  return sum;
}
};

for (const key in obj) {
alert (obj[key](arr));
};


const arr = [1, 2, 3];
const obj = {
getSumOfElem: function(arr) { 
    return arr.reduce((sum, current) => sum + current);
},
getSqrtOfElem: function(arr) {  
  return arr.reduce((sum, current) => sum + current**2);
},
getCubeOfElem: function(arr) { 
    return arr.reduce((sum, current) => sum + current**3);
}
};

for (const key in obj) {
    console.log(obj[key](arr));
};