// https://code.mu/ru/javascript/book/prime/time/time-moments-getting/


// №1
// Определите, какой день недели будет 31 декабря текущего года.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now  = new Date();
const date = new Date(now.getFullYear(), 11, 31); 

// console.log(getWeekDay(date));


// №2
// Определите, какой день недели будет 1 числа текущего месяца.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now2  = new Date();
const date2 = new Date(now2.getFullYear(), now2.getMonth(), 1); 

// console.log(getWeekDay(date2));


// №3
// Определите, какой день недели будет 31 декабря следующего года.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now3  = new Date();
const date3 = new Date(now3.getFullYear() + 1, 11, 31); 

// console.log(getWeekDay(date3));


// №4
// Определите, какой день недели будет через год в такую же дату, как сегодня.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now4  = new Date();
const date4 = new Date(now4.getFullYear() + 1, now4.getMonth(), now4.getDay()); 

console.log(getWeekDay(date4));


// №5
// Определите, какой день недели был год назад в такую же дату, как сегодня.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now5  = new Date();
const date5 = new Date(now5.getFullYear() - 1, now5.getMonth(), now5.getDay()); 

// console.log(getWeekDay(date5));


// №6
// Вопрос: не будет ли проблемы, если текущий месяц январь? Ведь он имеет номер 0, и при вычитании из него единицы мы получим минус первый месяц.

//нет не будет 


// №7
// Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

function getWeekDay(date) {
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
const now7  = new Date();
const date7 = new Date(now7.getFullYear(), now7.getMonth() - 1, now7.getDay()); 

// console.log(getWeekDay(date7));


// №8
// Определите, сколько дней между 1 января и 10 сентября текущего года.

const date1 = new Date(2022, 8, 10);
const date8 = new Date(2022, 0, 1);
const diff = date1 - date8;
console.log(diff / (1000 * 60 * 60 * 24));


// №9
// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.

const date9 = new Date(2022, 8, 10);
const date10 = new Date(2022, 7, 20);
const diff9 = date9 - date10;
console.log(diff9 / (1000 * 60 * 60 * 24));

// №10
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени

let now1  = new Date();
let date11 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate());
let date12= new Date(now1.getFullYear(), now1.getMonth(), now1.getDate() - 1, 12);
// console.log(date11 - date12);

// №11
// Определите, сколько часов прошло между началом дня и текущим моментом времени.

// const now  = new Date();
// const date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6);

// const date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
// const diff = date - date1;
// console.log(diff / (1000 * 60 * 60));

// что то не совсем понимаю


// №12
// Определите, сколько часов осталось до конца дня.

// Определите, сколько часов прошло между началом дня и текущим моментом времени.

// const now  = new Date();
// const date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// const date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
// const diff = date - date1;
// console.log(diff / (1000 * 60 * 60));