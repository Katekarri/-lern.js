// Задача 1
// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

const arr = [
 function func1() {
    return 1;
 }, 
 function () {
    return 2;
},
function() {
    return 3;
} 
 
];

// Задача 2
// Используя созданный вами массив arr выведите на экран число 3, вызвав соответствующую функцию.

arr[2]();

// Задача 3
// Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

const a = arr[0](); + arr[1]() + arr[2]();

// Задача 4
// Переберите созданный вами массив arr циклом и выведите результаты работы всех функций на экран.

for( const func of arr){
    alert( func());
    }