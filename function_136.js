//https://code.mu/ru/javascript/book/prime/functions/functions-object/


// Задача 1
// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите на экран сумму возвращаемых чисел.

const obj = {
  funk1: function() {
    return 1;
  },
  funk2: function() {
    return 2;
  },
  funk3: function() {
    return 3;
  }
};

alert(obj.funk1() + obj.funk2() + obj.funk3());

// Задача 2
// Переберите созданный объект циклом и выведите результаты работы функций на экран.

for(let key in obj) {
  alert(obj[key]());
};

// Задача 3
// Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.


const obj1 = {
  sumOfElements: function(arr) {
      let sum = 0;
      for(let elem of arr) {
        sum += elem;    
      };
        return sum;
  },

  sumSquareOfElements: function(arr) {
      let sum = 0;
      for(let elem of arr) {
        sum += elem * elem;
      };
        return sum;
  },

   sumCubOfElements: function(arr) {
      let sum = 0;
      for(let elem of arr) {
          sum += elem * elem * elem; 
      };
        return sum;
    },
}

arr = [1, 2, 3];

for(let key in obj1) {
  alert(obj1[key](arr));
};
