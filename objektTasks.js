import { testMe } from './utils.js'
//1
// У нас есть объект:
// let user = {
//   name: "John",
//   years: 30
// }
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let user = { name: "John", years: 30 };

const { name, years:age,isAdmin = false} = user

// alert( name );
// alert( age ); 
// alert(isAdmin); 


//2
// У нас есть объект salaries с зарплатами:
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function topSalary(salaries) {

  let highlyPaidEmployeeMoney = 0; //потому как переменная будет меняться
  let highlyPaidEmployeeName = null;
  for (let [name, money] of Object.entries(salaries)) {
    if (highlyPaidEmployeeMoney < money) {
      highlyPaidEmployeeMoney = money; //  если значение переменной с высшей зарплатой меньше чем текущая рассматриваемая зарплата, мы это значение( текущей зарплаты) присваиваем переменной нашей с наибольшей зарплатой
      highlyPaidEmployeeName = name;//назначаем то значение которое содержится в имени(ключе) чье значение зарплаты присвоилось для большей
    }
  }
  return highlyPaidEmployeeName;
}

topSalary(salaries);

testMe(topSalary, salaries, "Pete");
testMe(topSalary, { "Pete": 100, "John": 300, "Mary": 300 }, "John");
testMe(topSalary, {}, null);


// Задача 1
// В настольной игре Скрабл (Scrabble) каждая буква имеет определенную ценность. В случае с английским алфавитом очки распределяются так:

// A, E, I, O, U, L, N, S, T, R – 1 очко;
// D, G – 2 очка;
// B, C, M, P – 3 очка;
// F, H, V, W, Y – 4 очка;
// K – 5 очков;
// J, X – 8 очков;
// Q, Z – 10 очков.
// А русские буквы оцениваются так:

// А, В, Е, И, Н, О, Р, С, Т – 1 очко;
// Д, К, Л, М, П, У – 2 очка;
// Б, Г, Ё, Ь, Я – 3 очка;
// Й, Ы – 4 очка;
// Ж, З, Х, Ц, Ч – 5 очков;
// Ш, Э, Ю – 8 очков;
// Ф, Щ, Ъ – 10 очков.
// Напишите функцию, которая вычисляет стоимость введенного пользователем слова. Будем считать, что на вход подается только одно слово, которое содержит либо только английские, либо только русские буквы.


function countPoints(word) {
  const englishWord = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10};
  
  const russianWord = { а: 1, в: 1, е: 1, и: 1, н: 1, о: 1, р: 1, с: 1, т: 1, д: 2, к: 2, л: 2, м: 2, п: 2, у: 2, б: 3, г: 3, ё: 3, ь: 3, я: 3, й: 4, ы: 4, ж: 5, з: 5, х: 5, ц: 5, ч: 5, ч: 8, ш: 8, э: 8, ю: 8, ф: 10, щ: 10, ъ: 10}
  let  sum = 0;
    for (let i = 0; i < word.length; i++) {
        sum += englishWord[word[i].toLowerCase()] || 0;
        sum += russianWord[word[i].toLowerCase()] || 0;
    }
    return sum;
}


countPoints('dog');

testMe (countPoints, 'dog', 5);
testMe (countPoints, 'игра',6)



// задача 2
// Данные об email-адресах студентов хранятся в словаре:
// mails = {'mgu.edu': ['andrei_serov', 'alexander_pushkin', 'elena_belova', 'kirill_stepanov'],
//         'gmail.com': ['alena.semyonova', 'ivan.polekhin', 'marina_abrabova'],
//         'msu.edu': ['sergei.zharkov', 'julia_lyubimova', 'vitaliy.smirnoff'],
//         'yandex.ru': ['ekaterina_ivanova', 'glebova_nastya'],
//         'harvard.edu': ['john.doe', 'mark.zuckerberg', 'helen_hunt'],
//         'mail.ru': ['roman.kolosov', 'ilya_gromov', 'masha.yashkina']}

// Нужно написать функцию, которая принимает объект(пример выше) и возвращает список адресов в алфавитном порядке и в формате имя_пользователя@домен.



// задача 3
// Даны два списка одинаковой длины. Необходимо создать из них объект таким образом, чтобы элементы первого списка были ключами, а элементы второго — соответственно значениями нашего объекта.

function createObjectFromArrays(keys, values) {
  const obj = {};

  for(let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}
  return obj;
}

testMe(createObjectFromArrays, [1, 2, 3], ['jijkko', 'uioj', 'bin'], { 1 : 'jijkko', 2 : 'uioj', 3 : 'bin'} )

// задача 4
// В базе данных ветеринарной клиники информация о пациентах-котах хранится в списке списков. Данные о кошках и их владельцах записаны в формате «Кличка животного, Возраст животного, Имя владельца, Фамилия владельца»:
// cats = [
//   ['Мартин', 5, 'Алексей', 'Егоров'],
//   ['Фродо', 3, 'Анна', 'Самохина'],
//   ['Вася', 4, 'Андрей', 'Белов'],
//   ['Муся', 7, 'Игорь', 'Бероев'],
//   ['Изольда', 2, 'Игорь', 'Бероев'],
//   ['Снейп', 1, 'Марина', 'Апраксина'],
//   ['Лютик', 4, 'Виталий', 'Соломин'],
//   ['Снежок', 3, 'Марина', 'Апраксина'],
//   ['Марта', 5, 'Сергей', 'Колесников'],
//   ['Буся', 12, 'Алена', 'Федорова'],
//   ['Джонни', 10, 'Игорь', 'Андропов'],
//   ['Мурзик', 1,'Даниил', 'Невзоров'],
//   ['Барсик', 2, 'Виталий', 'Соломин'],
//   ['Рыжик', 7, 'Владимир', 'Медведев'],
//   ['Матильда', 8, 'Андрей', 'Белов'],
//   ['Гарфилд', 3, 'Александр', 'Березуев']
// ]
// Обнаружилось, что имена некоторых владельцев повторяются, потому что у них несколько кошек. Необходимо оптимизировать хранение данных таким образом, чтобы для каждого владельца при выводе на печать данные о всех его животных отображались в одной строке:

// Игорь Бероев: Муся, 7; Изольда, 2

const customers = [
  {
    firstname: 'Александр',
    lastname: 'Березуев',
    pets: [
      {name: 'Вася', age: 3},
      {name: 'Матильда', age: 11}
    ]
  },
    {
    firstname: 'Андрей',
    lastname: 'Белов',
    pets: [
      {name: 'Гарфилд', age: 4},
    ]
  }
]

// for (let item of customers) {
//   const { firstname, lastname, pets } = item
//   const petsNames = pets.map(({name, age}) => ${name} ${age}).join(', ')  
//   console.log(${firstname} ${lastname}: ${petsNames})
// }

// задача 5
// Дана строка в виде случайной последовательности чисел от 0 до 9.
// Требуется создать объект, который в качестве ключей будет принимать данные числа (т. е. ключи будут типом num), а в качестве значений – количество этих чисел в имеющейся последовательности. Для построения объекта создайте функцию countIt(sequence), принимающую строку из цифр.

// const num = '1233458756576878989809';
// const arr = Array.from(num);
// const  obj = {};
// arr.forEach(function countIt(sequence) {
//   obj[sequence] = (obj[sequence] || 0) + 1;
// });
// console.log(obj);




// const num = "1234";
// const arr = Array.from(num);
// const array = arr;
// const obj = Object.assign({}, array);
// console.log(obj)
//работает в случае не повторяемых чисел(не счетает если и склько повторяется)



function countIt(num) {
  const arr = Array.from(num);
  const obj = {};

  arr.forEach(
    (item) => (
      obj[item] = (obj[item] || 0) + 1
    )
  ); 
  return obj
}
console.log(countIt('1233458756576878989809'));



function countIt(num) {
  const obj = {};

  for (let char of num) {
    obj[char] = (obj[char] || 0) + 1
  }

  return obj
}




