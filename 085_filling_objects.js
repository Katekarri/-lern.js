// https://code.mu/ru/javascript/book/prime/loops/object-loop-filling/

// Задача 1
// Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.

// let obj1 = {};

// obj1['Monday'] = '1';
// obj1['Tuesday'] = '2';
// obj1['Wednesday'] = '3';
// obj1['Thursday'] = '4';
// obj1['Friday'] = '5';
// obj1['Saturday'] = '6';
// obj1['Sunday'] = '7';


const daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const value = [1, 2, 3, 4, 5, 6, 7];
const obj1 = {};

for (let i = 0; i < daysOfTheWeek.length; i++) {
  const dayOfTheWeek = daysOfTheWeek[i];

  obj1[dayOfTheWeek] = value[i]; 
}

console.log(obj1);


// Задача 2
// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const obj2 = {};

for (let i = 0; i < arr1.length; i++) {
  const dayOfTheWeek2 = arr1[i];
  const value2 = arr2[i];

  obj2[dayOfTheWeek2] = value2;
}


console.log(obj2);


// Задача 3
// Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const arr4 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const obj3 = {};

for (let i = 0; i < arr3.length; i++) {
  const dayOfTheWeek2 = arr3[i];
  const value2 = arr4[i];

  obj3[dayOfTheWeek2] = value2;
}



// Задача 4
// Дан объект:
// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.


const obj10 = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
const newObj10 = {};


for (let key in obj10) {
  const newValue = obj10[key];

  if (newValue >= 10 && newValue < 20) {
    newObj10[key] = newValue;
    }
}

// Задача 5
// Дан объект:
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// Запишите в новый объект дни недели, номера которых являются нечетными числами.


const obj5 = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
const result2 = {};

for (let elem in obj5) {
  if (elem % 2 != 0) {
    result2[elem] = obj5[elem];
  }
}


// Задача 6
// Дан объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const obj6 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

for (let elem in obj6) {
    obj6[elem] **= 2;
}


// Задача 7
// Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

const obj7 = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
const result3 = {};

for (let key in obj7) {
  result3[obj7[key]] = key;
}

console.log(result3)




