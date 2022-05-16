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

let { name, years:age,isAdmin =false} = user

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