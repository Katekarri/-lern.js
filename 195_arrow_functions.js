// https://code.mu/ru/javascript/book/prime/functions/arrow-functions/

// №1
// Дана следующая функция с коллбэком:
// let result = every([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

const result = every([1, 2, 3, 4, 5], elem => elem > 0);


// №2
// Дана следующая функция с коллбэком:
// let result = every([1, 2, 3, 4, 5], function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

const result2 = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);



// №3
// Дана следующая функция с коллбэком:
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = each(arr, function(elem, index) {
// 	if (elem * index > 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// Упростите коллбэк через стрелочную функцию.

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const result3 = each(arr, (elem, index) => elem * index > 10);