// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

function removeEveryOther(arr){
  const newArr = [];
  for (let i = 0; i < arr.length; i++) { 
    newArr.splice(i + 1);
  }
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7]);

