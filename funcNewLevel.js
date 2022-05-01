import { testMe } from './utils.js'

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
function getSeason(num) {
  let season = ['Зима', 'Весна', 'Лето', 'Осень'];
  let numberMonht = Math.floor((num % 12) / 3);
  return season[numberMonht];
}
testMe(getSeason, 2, 'Зима')
testMe(getSeason, 12, 'Зима')
testMe(getSeason, 8, 'Лето')
testMe(getSeason, 9, 'Осень')

// 2. Пользователь делает вклад в размере a рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты).
// Написать функцию bank, принимающая аргументы money_ и years, и возвращающую сумму, которая будет на счету пользователя.

function bank(a, years) {    
    let sum = a;
    let percentOfSum;
    for(let i = 0; i < years; i++) {          
        percentOfSum = sum * 10 / 100;
        sum += percentOfSum;
    }
    return sum;
}
testMe(bank, 127, 3, 169.04)

function calculateDeposit(a, years, percent=10) {  
  let percentPart = 1 + percent / 100;
  return a * percentPart ** years
}
testMe(calculateDeposit, 127, 3, 169.04)
testMe(calculateDeposit, 127, 3, 50, 169.04)


// console.log(bank(2000, 5));




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

// function isYearLeap(year) {
//   if (year % 4 === 0){
//     return true;
//   } else{
//     return false;
//   }
// }
// is_year_leap (1941);
// is_year_leap (1940);



function is_year_leap(year) {
  if ((year % 4 == 0) && (year % 100 != 0 ) || (year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

//  console.log(is_year_leap (2600));
//  console.log(is_year_leap ( 2400));

testMe(is_year_leap, 20, true)
testMe(is_year_leap, 21, false)
testMe(is_year_leap, 30, false)
testMe(is_year_leap, 96, true)
testMe(is_year_leap, 97, false)
testMe(is_year_leap, 100, false)
testMe(is_year_leap, 200, false)
testMe(is_year_leap, 400, true)
testMe(is_year_leap, 500, false)

function isYearLeap(number) {
  if (number % 4 == 0) {
    if (number % 100 == 0) {
      if (number % 400 == 0) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  } else {
    return false
  }
}
testMe(isYearLeap, 20, true)
testMe(isYearLeap, 21, false)
testMe(isYearLeap, 30, false)
testMe(isYearLeap, 96, true)
testMe(isYearLeap, 97, false)
testMe(isYearLeap, 100, false)
testMe(isYearLeap, 200, false)
testMe(isYearLeap, 400, true)
testMe(isYearLeap, 500, false)


// 4. Напишите функцию sum_range(start, end), которая суммирует все целые числа от значения «start» до величины «end» включительно.
// Если пользователь задаст первое число большее чем второе, просто поменяйте их местами.

 
function sumRange(start, end) {
  let sum = 0;

  if(start > end){ 
    let spareVariable = start;
    start = end;
    end = spareVariable;
  }

  for(let i = start; i <= end; i++){
    sum += i;
  }

  return sum;
}
testMe(sumRange, 3, 5, 12)
testMe(sumRange, 5, 3, 12)

// const x = sum_range(3, 1)
// const y = sum_range(1, 5)

// 5. Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.

function rgb(a = 0, b = 0, c = 0) {
  return `rgb(${a}, ${b}, ${c})`;
}
// rgb(4, 67);
