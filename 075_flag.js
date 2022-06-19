// https://code.mu/ru/javascript/book/prime/loops/flags/

// Задача 1
// Дан массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

const arr = ['a', 'b', 'c', 'd', 'e'];

let isPresented = false;

for (let elem of arr) {
  if (elem === 'c') {
    isPresented = true;
    break;  
   }
}

if (isPresented) {
	console.log('есть');
} else {
	console.log('нет');
}

