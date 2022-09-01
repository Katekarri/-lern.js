// https://code.mu/ru/javascript/book/prime/time/dates-string-comparison/


// №1
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

const date1 = '2020-11-31';
const date2 = '2020-12-01';
if (date1 >  date2) {
  console.log(date1);
} else {
  console.log(date2);
}



// №2
// Напишите код, который сравнит две приведенные ниже даты и выведет сообщение о том, какая из них больше:
// let date1 = '09-21';
// let date2 = '09-23';

const date3 = '09-21';
const date4 = '09-23';
if (date3 >  date4) {
  console.log(date3);
} else {
  console.log(date4);
}


// №3
// Дана дата, содержащая месяц и день. Определите знак Зодиака, на которую приходится эта дата.


const month = 'december';
const day = 5;
let zodiacSign = '';
    if (month == 'december'){
         
        if (day < 22)
        zodiacSign = 'Sagittarius';
        else
        zodiacSign ='Capricorn';
    }
         
    else if (month == 'january'){
        if (day < 20)
        zodiacSign = 'Capricorn';
        else
        zodiacSign = 'Aquarius';
    }
         
    else if (month == 'february'){
        if (day < 19)
        zodiacSign = 'Aquarius';
        else
        zodiacSign = 'Pisces';
    }
         
    else if(month == 'march'){
        if (day < 21)
        zodiacSign = 'Pisces';
        else
        zodiacSign = 'Aries';
    }
    else if (month == 'april'){
        if (day < 20)
        zodiacSign = 'Aries';
        else
        zodiacSign = 'Taurus';
    }
         
    else if (month == 'may'){
        if (day < 21)
        zodiacSign = 'Taurus';
        else
        zodiacSign = 'Gemini';
    }
         
    else if( month == 'june'){
        if (day < 21)
        zodiacSign = 'Gemini';
        else
        zodiacSign = 'Cancer';
    }
         
    else if (month == 'july'){
        if (day < 23)
        zodiacSign = 'Cancer';
        else
        zodiacSign = 'Leo';
    }
         
    else if( month == 'august'){
        if (day < 23)
        zodiacSign = 'Leo';
        else
        zodiacSign = 'Virgo';
    }
         
    else if (month == 'september'){
        if (day < 23)
        zodiacSign = 'Virgo';
        else
        zodiacSign = 'Libra';
    }
         
    else if (month == 'october'){
        if (day < 23)
        zodiacSign = 'Libra';
        else
        zodiacSign = 'Scorpio';
    }
         
    else if (month == 'november'){
        if (day < 22)
        zodiacSign = 'Scorpio';
        else
        zodiacSign = 'sagittarius';
    }

console.log(zodiacSign);