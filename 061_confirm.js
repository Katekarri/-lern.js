// https://code.mu/ru/javascript/book/prime/conditions/confirm/

// Задача 1
// Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.

const isAdult = confirm('Are you 18?');
if (isAdult) {
  alert('Access is open');
} else {
  alert('Access is denied');  
}