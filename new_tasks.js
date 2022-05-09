import { testMe } from './utils.js'
//задача 1

function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];
  // Пишем решение вот тут
  for (let i = 0; i < arr.length; i++){
    result[i] = arr[i];
  }    
    // Не трогаем
  return result;
}


//задача 2
// Место для второй задачи

function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
  
  for (let i = 0; i < data.length; i++) {
    const currentElement = data[i];
    
    if (typeof currentElement === 'number') {
      data[i] = currentElement * 2;

    } else if(typeof currentElement === 'string') {
      data[i] = `${currentElement}-done`;
    }
  } 
    // Не трогаем
  return data;
}

secondTask();
testMe(secondTask,[10, 20, 'Shopping-done', 40, 'Homework-done']);


//задача 3
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
  const data = [5, 10, 'Shopping', 20, 'Homework'];
  const result = [];

    // Пишем решение вот тут
  for (let i = data.length - 1; i >= 0; i--) {
    result.push(data[i]);
  }  
    // Не трогаем
  return result;
}

thirdTask()

testMe(thirdTask, ['Homework', 20, 'Shopping', 10, 5])



//задача 3***
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

function paintStar(lines) {
  
}
testMe(paintStar,6,[
    [' ', ' ', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', ' ', '*', '*', '*', ' ', ' ', ' ', ' ',],
    [' ', ' ', ' ', '*', '*', '*', '*', '*', ' ', ' ', ' ',],
    [' ', ' ', '*', '*', '*', '*', '*', '*', '*', ' ', ' ',],
    [' ', '*', '*', '*', '*', '*', '*', '*', '*', '*', ' ',],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*',],
])
