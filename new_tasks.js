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

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

//задача 3***
// const lines = 5;
// let result = '';
// Проверяется именно переменная result, формируйте строку в ней

// function paintStar(lines) {
//   let trianglelFromArrays = [];
//    for(let i=0, i)
// }


function paintStar(points) {
      let result = '';
    for (let i = 1; i <= points; i++) {
      const lines = ' '.repeat(points - i);
      const stars = '*'.repeat(i * 2 - 1);
      result += `${lines}${stars}${lines}\n`;
    }
   return result;
  }
  
  console.log(paintStar(6));

testMe(paintStar, 6, `       
        
        ${'*'}
       ${'***'}
      ${'*****'}  
     ${'*******'}
    ${'*********'}`);



//задача 4
////задача 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число-это база, второе числа- это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возеращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами --- После последнега числа их не должно быть. Если второй аргумент не является числом, равен или меньше нуля-то возаращать просто первый аргумент. (Проверяем через оператар tvрeof)

function createNewValue(base, num) {
  let newString = '';

  if (typeof (num) !== 'number' || num <= 0) {
    return base;
  }

  for (let i = 0; i <= num; i++) {
    if (i === num) {
      newString += `${base * i}---`;
    }

    return newString;
  }
}
createNewValue(5, 3);

  
testMe(createNewValue, 5, 3, '5---10---15');
testMe(createNewValue, 5, '3', '5');
testMe(createNewValue, 5, -3, '5');
testMe(createNewValue, 5, 0, '5');
