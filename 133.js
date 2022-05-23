// Задача 1
// Определите, является ли представленная функция Function Declaration или Function Expression:
// function func() {
// 	alert('!');
// }

//Function Declaration


// Задача 2
// Определите, является ли представленная функция Function Declaration или Function Expression:
// let func = function() {
// 	alert('!');
// }

//Function Expression не хватает ; после }


// Задача 3
// Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

func1()
function func1() {
  alert('hi')
}

// Задача 4
// Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

func1()
const func2 = function () {
  alert('hi')
};

// Задача 5
// Расставьте точки с запятой во всех необходимых местах:
// let func1 = function() {alert('!')};
// let func2 = function() {
// 	alert('!')
// };
// function func3() {
// 	alert('!');
// }
