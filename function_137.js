//https://code.mu/ru/javascript/book/prime/functions/passing-functions-as-parameters/#top


// Задача 1
// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите на экран сумму результатов функций.

test (
    function() {
        return 1;
    },
    function() {
        return 2;
    },
    function() {
        return 3;
    }
); 

function test(func1, func2, func3) {
    alert(func1() + func2() + func3());
}

// Задача 2
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

const a = function() {
    return 1;
};
const b = function() {
    return 2;
};
const c = function() {
    return 3;
};

test(a, b, c);

function test(func1, func2, func3) {   
    return func1() + func2() + func3();
};

// Задача 3
// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

function func1() {
    return 1;
};

function func2() {
    return 2;
};

function func3() {
    return 3;
};

test(func1, func2, func3);

// Задача 4
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

const func1 = function() {
    return 1;
};

const func2 = function() {
    return 2;
};

const func3 = function() {
    return 3;
};

test(func1, func2, func3)


// Задача 5
// Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

test(function(num) {
  return num * num * num;
});

function test(func) {
  alert(func(3));
}

// Задача 6
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.

function func(num){
  return num * num * num;
};

test(func);

function test(func) {
  alert(func(3));
}

// Задача 7
// Переделайте передаваемую функцию на Function Expression с тем же именем func.


const funk = function(num){
    return num * num * num;
  };

test(func)
  
function test(func) {
  alert(func(3));
};

// Задача 8
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемая функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

const funk1 = function(a, b){
    return a + b;
};

test(func1)
  
function test(func1) {
  alert(func1(2, 3));
}

// Задача 9
// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
// Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы на экран.


const test = function(num, func1, func2) {
  return func1(num) + func2(num);
};

const func1 = function() {
  return num * num;
};

const func2 = function() {
  return num * num * num;
};

test(3, func1, func2);

// Задача 10
// Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
// Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет применится к каждому элементу массива

const funcInArr = function(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
  };
    return arr;
};
   
const result = funcInArr (
  [1, 2, 3],
  function(num) {
    return num;
  }
);
  
  console.log(result);


// Задача 11
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.