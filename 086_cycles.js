// https://code.mu/ru/javascript/book/prime/loops/filling-changing-training/

// Задача 1
// Дан следующий объект с работниками и их зарплатами:
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// Увеличьте зарплату каждого работника на 10%.

const obj1 = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let elem in obj1) {
  obj1[elem] += 1/10 * obj1[elem];
}


// Задача 2
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

const obj2 = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};

for (let elem in obj2) {
  if (obj2[elem] <= 400) {
    obj2[elem] += 1/10 * obj2[elem];
  }  
}


// Задача 3
// Даны следующие массивы:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const obj3 = {}

for (let i = 0; i < arr1.length; i++) {
  const keyArr1 = arr1[i];
  const elemArr2 = arr2[i];
  
  obj3[keyArr1] = elemArr2;
}


// Задача 4
// Дан следующий объект:
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

const obj4 = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0;
let sumElem = 0;
let result = 0;

for (let key in obj4) {
  sumKey += Number(key);
  sumElem += Number(obj4[key]); 
}
result = sumKey / sumElem;


// Задача 5
// Дан следующий объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Запишите ключи этого объекта в один массив, а значения - в другой.

const obj5 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let nuwArr1 = [];
let nuwArr2 = [];

for (let key in obj5) {
  nuwArr1.push(key);
  nuwArr2.push(obj5[key]);
}


// for (const [key, value] of Object.entries(yourObj)) {
//   console.log(key)
//   console.log(value)
// }

// Задача 6
// Дан следующий объект:
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:
// let arr = [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

const obj6 = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let arr3 = [];

for (let key in obj6) {
  let newValue = String(obj6[key])[0];
if (newValue === '1' || newValue === '2') {
    arr3.push(obj6[key]);
  }
  
}



// Задача 7
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

const arr = ['a', 'b', 'c', 'd', 'e'];
const obj7 = {};

for (let i = 1; i <= arr.length; i++) {
  obj7[i] = arr[i- 1];
}


// Задача 8
// Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:
// let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

const arr8 = ['a', 'b', 'c', 'd', 'e'];
const obj8 = {};

for (let i = 1; i < arr8.length; i++) {
  obj8[arr8[i - 1]] = i;
  
}
//Решение по антлогии, смысла не пониаю(((((((((((