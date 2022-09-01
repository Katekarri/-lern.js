// https://code.mu/ru/javascript/book/prime/dom/basis/element-getting/

// №1
// Даны 3 абзаца:
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

const p1 = document.querySelector('#elem1');
const p2 = document.querySelector('#elem2');
const p3 = document.querySelector('#elem3');
console.log(p1, p2, p3);

// №2
// Дан следующий HTML:
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

const p = document.querySelector('p');//document.getElementsByTagName('p')[0]
console.log(p);


// №3
// Дан следующий HTML:
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.

const  newP = document.querySelector('p');
console.log(newP);

// №4
// Дан следующий HTML:
// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.

const elem = document.querySelector('.www');
console.log(elem);

//!!! не уверена в правильности оформление этих заданий