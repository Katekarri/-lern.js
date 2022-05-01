// 1. Написать функцию season, принимающую 1 аргумент — номер месяца (от 1 до 12), и возвращающую время года, которому этот месяц принадлежит (зима, весна, лето или осень).

// function season(num) {
//   if (num === 12 || num === 1 || num === 2) {
//     return 'Зима';
//   } else if (num === 3 || num === 4 || num === 5) {
//     return 'Весна';
//   } else if (num === 6 || num === 7 || num === 8) {
//     return 'Лето';
//   } else if (num === 9 || num === 10 || num === 11) {
//     return 'Осень';
//   }
//   else {
//     return 'Невеный номер';
//   }
// }
// season(8);
function season(num) {
  let season = ['Зима', 'Весна', 'Лето', 'Осень'];
  let numberMonht = Math.floor(num / 12) / 3;
  return season[numberMonht];
}

// 2. Пользователь делает вклад в размере a рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты).
// Написать функцию bank, принимающая аргументы a и years, и возвращающую сумму, которая будет на счету пользователя.

// let n = 10;
// let x = a / 100 * n;
// function bank(a, years) {
//   if ( years = a * n) {
//     return console.log(years);
//   }
// }
// bank(1000, 3);
// let sum = 0;
// function bank(a , years)
// for (let i = 0; i <= years; i++) {
 
// }


// 3. Написать функцию is_year_leap, принимающую 1 аргумент — год, и возвращающую True, если год високосный, и False иначе.

// function is_year_leap(year) {
//   if (year % 4 === 0){
//     return true;
//   } else{
//     return false;
//   }
// }
// is_year_leap (1941);
// is_year_leap (1940);

function is_year_leap(year) {
  if (year % 4 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
//  console.log(is_year_leap (366));
//  console.log(is_year_leap (365));


// 4. Напишите функцию sum_range(start, end), которая суммирует все целые числа от значения «start» до величины «end» включительно.
// Если пользователь задаст первое число большее чем второе, просто поменяйте их местами.

 
function sum_range(start, end) {
  let sum = 0;

    if(start > end){ 
      let spareVariable = start;//меняем местами посредствам создания доп. переменной
      start = end;
      end = spareVariable;
    }
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}
// const x = sum_range(3, 1)
// const y = sum_range(1, 5)

// 5. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.

function rgb(a = 0, b = 0, c = 0) {
  return `rgb(${a}, ${b}, ${c})`;
}
// rgb(4, 67);