//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let i = 0; i < arrayOfSheep.lenght; i++) {
    if (arrayOfSheep[i] == true) {
       sum ++;
    }      
  }
  
  return sum;  
}

countSheeps([true, true]);