// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }

]

// 2) Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// Пример:

// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"


// function showListOfFilms(arr) {
//   return arr.reduce((movie, current) =>`${typeof(movie) === 'object' ? movie.name : movie}, ${current.name}`);
// }

// showListOfFilms(films);



// function showListOfFilms(films) { 
//   let  movie = films.map(film2 => film2.name + ', ').join('');
//   return  movie;
// }


function showListOfFilms(films) { 
  return films.map(film => film.name).join(', ');
}

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]


function setFilmsIds(arr) {
  return arr.map((film, i) => {
      return {...film, id: i};
  });
}

const tranformedArray = setFilmsIds(films);



// 4) Запишите результат предыдущей функции в переменную tranformedArray. Напишите функцию checkFilms, которая будет проверять, что в каждом из фильмов есть поле id. Если это так - функция возвращает true. Очевидно, что сейчас условие должно выполняться, если мы передаем checkFilms(tranformedArray); :)


// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// function checkFilms(arr) {
//   return arr.every(film => film.id || film.id === 0 ? true : false)
// }

// function checkFilms2(arr) {
//   return arr.every( elem =>  "id" in elem);       
// }

// checkFilms(tranformedArray);


// function checkFilms(arr) {
//   return arr.every(function(elem) {
//     console.log(elem);
//     if ('id' in elem) {
//       return true;
//     } else {
//       return false;
//     }  
//   });  
// }

// function checkFilms2(arr) {
//   return arr.every( elem =>  "id" in elem);       
// }

const checkFilms3 = arr => arr.every( elem =>  "id" in elem); 

console.log(checkFilms3(tranformedArray));



//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/in
