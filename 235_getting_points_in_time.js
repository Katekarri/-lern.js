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



// №9
// Определите, сколько дней между 20 числом текущего месяца и 10 числом следующего.



// №10
// Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени



// №11
// Определите, сколько часов прошло между началом дня и текущим моментом времени.



// №12
// Определите, сколько часов осталось до конца дня.



// №13
// Рассмотрите промежуток от 2000 года до текущего года. Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.