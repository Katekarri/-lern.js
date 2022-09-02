// https://code.mu/ru/javascript/book/prime/dom/basis/named-event-handlers/



// №1
// Дан следующий HTML код:
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:
// function func1() {
// 	console.log(1);
// }
// function func2() {
// 	console.log(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.


const button1 = document.querySelector('#button');
button1.addEventListener('click', func1);

function func1() {
	alert(1);
}

const button2 = document.querySelector('#button2');
button2.addEventListener('click', func2);

function func2() {
	alert(2);
}

//работает если закоментировать разметку предыдущей задачи