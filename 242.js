// https://code.mu/ru/javascript/book/prime/dom/basis/events-handlers-binding/

// №1
// Даны 3 кнопки:
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.


const button1 = document.querySelector('#button1');
button1.addEventListener('click', function() {
  alert(1);
});


const button2 = document.querySelector('#button2');
button2.addEventListener('click', function() {
  alert(2);
});

const button3 = document.querySelector('#button3');
button3.addEventListener('click', function() {
  alert(3);
});