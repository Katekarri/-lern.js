// https://code.mu/ru/javascript/book/prime/functions/passing-functions-as-parameters/

// №1
// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.

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
  console.log(func1() + func2() + func3());
}


test (
  () => 1,
  () => 2,
  () => 3,
);

function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}


// №2
// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.

function test(func1,func2,func3) {
  return func1() + func2() + func3();
  }

  const result1 = function() {
    return 1;
  };

  const result2 = function() {
    return 2;
  };
  
  const result3 = function() {
    return 3;
  };
  alert(test(result1, result2, result3));
  

// №3
// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

function test(func1,func2,func3) {
  alert(func1() + func2() + func3());
  };

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


// №4
// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.

function test(func1,func2,func3) {
  alert(func1() + func2() + func3());
  };

  const func1 = function()  {
  return 1;
  };

  const func2 = function() {
  return 2;
  };

  const func3 = function() {
  return 3;
  };

  test(func1, func2, func3);


// №5
// Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.

test(function(num) {
	return num ** 3;
});

function test(func) {
	console.log(func(3));
}


// №6
// Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.


function func(num) {
	return num ** 3;
};
test(func);

function test(func) {
	console.log(func(3));
}


// №7
// Переделайте передаваемую функцию на Function Expression с тем же именем func.

const func = function (num) {
	return num ** 3;
};
test(func);

function test(func) {
	console.log(func(3));
}


// №8
// Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. Выведите алертом результат.

const func = function (num1, num2) {
  const sum = num1 + num2;
	return sum;
};

test(func);
function test(func) {
	console.log(func(2, 3));
}


// №9
// Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
// Пусть функция test возвращает сумму результатов переданных функций:
// function test(num, func1, func2) {
// 	return func1(num) + func2(num);
// }
// Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб. Выведите результат работы в консоль.

function test(num, func1, func2) {
	return func1(num) + func2(num);
};

const func1 = function() {
  return num ** 2;
};

const func2 = function() {
  return num ** 3;
};

const num = 3;

console.log(test(num,func1,func2));


// №10
// Не подсматривая в мой код реализуйте такую же функцию test самостоятельно : 'Давайте сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. Переданная функция должна будет применится к каждому элементу массива:
// function test(arr, func) {
// 	// вернем измененный массив
// }'

// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
	
// 	return arr;
// }

// const nuwArr = test([1, 2, 3], function(num) {
// 	return num ** 2;
// });

// console.log(nuwArr); 
// // +-

function test(arr, func){
  for (let i = 0; i < arr.length; i++) {
    arr[i] = func(arr[i]);
}
  return arr;
}
const arr = [1, 2, 3];
const nuwArr = test(arr, (num) => num ** 2);
console.log(nuwArr);


// №11
// Вызовите созданную вами функцию test, передав ей параметром массив с числами. Сделайте так, чтобы функция вернула массив с кубами этих чисел.

const nuwArr2 = test([2, 4, 6], function(num) {
	return num ** 3;
});

console.log(nuwArr2); 