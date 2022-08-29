// https://code.mu/ru/javascript/book/prime/time/weekday-getting/


// №1
// Выведите на экран номер текущего дня недели.

const date = new Date();
console.log(date.getDay());


// №2
// Определите, является ли текущий день недели выходным или рабочим днем.

// const date = new Date();
// const day = date.getDay();

// function showDay(day) {
// 	const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//   if (days[day] === 'сб' || days[day] === 'сб')
// 	return 'выходной';
// }

// alert(showDay(day));

const date2 = new Date();
const day = date2.getDay();

function showDay(day) {
  if (day == 6 || day == 0) {
    console.log('weekend');
  } else {
    console.log('not weekend');
  }
}
showDay(day)

// №3
// Определите сколько дней осталось до ближайшего воскресенья.

function whenSunday() {   
  const num = 7 - new Date().getDay();
  return num;
}
// console.log(whenSunday());