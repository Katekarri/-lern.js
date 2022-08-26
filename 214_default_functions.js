// https://code.mu/ru/javascript/book/prime/destructuring/arrays/functions-default-values/

// №1
// Модифицируйте полученный выше код так, чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц, а при отсутствии значения для года - соответственно текущий год.

function func() {
  return (new Date).getDate();
}

const [year = func(), month = func(), day] = arr;

