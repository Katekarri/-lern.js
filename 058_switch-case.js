// https://code.mu/ru/javascript/book/prime/conditions/switch-case/

// Задача 1
// Переменная num может принимать значения 1, 2, 3 или 4. Если она имеет значение 1, то выведите на экран текст 'зима', если значение 2 - 'весна' и так далее. Если в переменной будет какое-то другое значение - выведите на экран сообщение об ошибке. Решите задачу через switch-case.

let num;

switch (num) {
  case 1 :
    alert('зима');
  break;
  case 2 :
    alert('весна');
  break;
  case 3 :
    alert('Лето');
  break;
  case 4 :
    alert('Осень');
  break;
  default :
    alert('ошибка')
}