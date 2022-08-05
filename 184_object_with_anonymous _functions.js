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


// №3
// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

const arr = [1, 2, 3];
var sum = 0;

const object3 = {
  func1: function(arr) {
    return 
  },
  func2: function(arr) {
    return 2;
  },
  func3: function(arr) {
    return 3;
  }
};

// function();
