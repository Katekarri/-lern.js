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
  for (i = 0; i < data.length; i++) {

    if (data[i] === Number.data) {
      data[i] = data[i] * 2;

    } else if(data[i] === String.data) {
      data[i] = `${data[i]}-done`;
    }
  } 
    // Не трогаем
  return data;
}

secondTask();

//задача 3
// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}

//задача 3***
const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней