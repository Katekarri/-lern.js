
// https://code.mu/ru/javascript/book/prime/functions/recursion-structures/


// №1
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9
      }
    }
  }
}

function getElem(obj) {
  for (const key in obj) {
    if (typeof obj[key] != 'object') {
      console.log(obj[key]);
  } else {
    getElem(obj[key]);
    }
  }
}
getElem(obj);


// №2
// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
// Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
// [1, 2, 7, 8, 3, 4, 5, 6, 7]


function SimpleArr(arr) {
  const result = [];
    
  function func(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'object') {
        func(arr[i]);
        } else { 
          result.push(arr[i]);
      }
    }
      return result;
  } 
  console.log(func(arr));
}
  
SimpleArr([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


// №3
// Дан многомерный объект произвольного уровня вложенности, например, такой:
// {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// С помощью рекурсии найдите сумму элементов этого объекта.

const obj3 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    e: 4
  },
  f: {
    g: 5,
    j: 6,
    k: {
      l: 7,
      m: {
        n: 8,
        o: 9
      }
    }
  }
}

function sumOfElemOfObj(obj3) {
  let sum = 0;
  for (const key in obj3) {
    if (typeof obj3[key] == 'object') {
      sum += sumOfElemOfObj(obj3[key]);
    } else {
        sum += obj3[key];        
      }
  }
  return sum;
}
console.log(sumOfElemOfObj(obj3));


// №4
// Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
// ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
// С помощью рекурсии слейте элементы этого массива в одну строку:
// 'abcdefgjk'

function getStringFromArr(arr) {
  let str = '';
  for (const elem of arr) {
    if (typeof elem == 'object') {
      str += getStringFromArr(elem);
      } else { 
        str += elem;
    }
  }
  return str;
}
  
// console.log(getStringFromArr(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));


// №5
// Дан многомерный массив произвольного уровня вложенности, например, такой:
// [1, [2, 7, 8], [3, 4], [5, [6, 7]]]
// Возведите все элементы-числа этого массива в квадрат.

function getNumberSquaredInArray(arr) {
  const result = [];
    
  function func(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == 'object') {
        func(arr[i]);
        } else { 
          result.push(arr[i] ** 2);
      }
    }
      return result;
  } 
  console.log(func(arr));
}
  
getNumberSquaredInArray([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);