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

let { name, years:age,isAdmin = false} = user

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

  let highlyPaidEmployee = 0; //потому как переменная будет меняться
  let highlyPaidEmployeeName = "";
  for (let [name, money] of Object.entries(salaries)) {
    if (highlyPaidEmployee < money) {
     highlyPaidEmployee = money; //  если значение переменной с высшей зарплатой меньше чем текущая рассматриваемая зарплата, мы это значение( текущей зарплаты) присваиваем переменной нашей с наибольшей зарплатой
      highlyPaidEmployeeName = name;//назначаем то значение которое содержится в имени(ключе) чье значение зарплаты присвоилось для большей
    }
  }
  return highlyPaidEmployeeName;
}

topSalary(salaries)

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

// function countPoints(word) {
//   const arrWord = Array.from(word);

//   for (i = 0; i <= arrWord.length; i++ ){
//     if()
//   }
// }

function countPoints(word) {
  const englishWord = {
    1: [A, E, I, O, U, L, N, S, T, R],
    2: [D, G],
    3: [B, C, M, P],
    4: [F, H, V, W, Y],
    5: [K],
    8: [J, X],
    10: [Q, Z ],
  }
  const russianWord = {
    1: [ А, В, Е, И, Н, О, Р, С, Т],
    2:[Д, К, Л, М, П, У],
    3: [Б, Г, Ё, Ь, Я],
    4: [Й, Ы],
    5: [Ж, З, Х, Ц, Ч],
    8: [Ш, Э, Ю ],
    10:[Ф, Щ, Ъ],
  }

  for (i = 0; i <= word.length; i++ ){
    if( )
  }

}

function countPoints(word)

testMe(countPoints, 'dog', 5);
testMe(countPoints, 'игра',6)



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

const keys = [1, 2, 3, 4, 5];
const values = ['jijkko, uioj, bin, hiujio, hj'];
const obj = {};

for(let i = 0; i < keys.length; i++) {
  obj[keys] = values[i];
}

// console.log(obj);

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

// задача 5
// Дана строка в виде случайной последовательности чисел от 0 до 9.

// Требуется создать объект, который в качестве ключей будет принимать данные числа (т. е. ключи будут типом int), а в качестве значений – количество этих чисел в имеющейся последовательности. Для построения объекта создайте функцию countIt(sequence), принимающую строку из цифр.
