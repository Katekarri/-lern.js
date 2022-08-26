// https://code.mu/ru/javascript/book/prime/destructuring/arrays/functions-default-values/

// №1
// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

function getCurrentMonth() {
  return (new Date).getMonth();
}
const [year, month = getCurrentMonth(), day] = arr;


function getCurrentYear() {
  return (new Date).getFullYear();
}
const [year1, month1 = getCurrentYear(), day1] = arr1;
