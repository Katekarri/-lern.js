// https://code.mu/ru/javascript/book/prime/destructuring/arrays/functions-default-values/

// №1
// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

const arr = [];
function getCurrentMonth() {
  return (new Date).getMonth() + 1;
}
function getCurrentYear() {
  return (new Date).getFullYear();
}
function func() {
  return (new Date).getDate();
}
const [year = getCurrentYear(), month = getCurrentMonth(), day = func()] = arr;
const today = `The ${day}-${month}-${year} is a perfect day!` 
console.log(today)



// const arr = [];
// function func() {
// 	return new Date();
// }
// const d = func();
// const [year = d.getFullYear(), month = d.getMonth() + 1, day = d.getDate()] = arr;
// const today = `The ${day}-${month}-${year} is a perfect day!`
// console.log(today)





