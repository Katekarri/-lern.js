// https://code.mu/ru/javascript/book/prime/conditions/practicum/

// Задача 1
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month;
if (month >= 3 && month <= 5) {
  alert('весна');
} else if (month >= 6 && month <= 8) {
  alert('лето');
} else if (month >= 9 && month <= 11) {
  alert('осень');
}else if (month == 12 || month == 2 || month == 1) {
  alert('зима');
}


const monthNumber = 12
const seasons = ['зими', 'весна', 'лето', 'осень']
console.log(seasons[Math.floor((monthNumber % 12) / 3)]);


// Задача 2
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

const string = 'abcde';
if (string[0] == 'a') {
  alert('да');
} else {
  alert('нет');
}

// Задача 3

// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

const num = 12345;
const strNum = String(num);
if(strNum[0] == 1 || strNum[0] == 2 || strNum[0] == 3) {
  alert('да');
} else {
  alert('нет');
}

// Задача 4
// Дано трехзначное число. Найдите сумму цифр этого числа.

const number = 124;
let sum = 0;

const str = String(number);
for (let i = 0; i < str.length; i++) {
  sum += Number(str[i]);
}

console.log(sum)
  

// Задача 5
// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
 
const date = 456784;
const strDate = String(date);

if(strDate[0] + strDate[1] + strDate[2] == strDate[3] + strDate[4] + strDate[5]) {
    alert('да');
} else {
    alert('нет'); 
}





