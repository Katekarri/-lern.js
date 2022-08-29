// https://code.mu/ru/javascript/book/prime/time/object-Date/

// №1
// Выведите на экран текущий день.

const dayNuw = new Date();
console.log(dayNuw.getDate());

// №2
// Выведите на экран текущий месяц.

const monthNuw = new Date();
console.log(monthNuw.getMonth());

// №3
// Выведите на экран текущий год.

const yearNuw = new Date();
console.log(yearNuw.getFullYear());


// years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
// months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12),
// days = Math.floor(t / (1000 * 60 * 60 * 24) % 30),
// hours = Math.floor((t / (1000 * 60 * 60)) % 24),
// minutes = Math.floor((t / (1000 * 60)) % 60),
// seconds = Math.floor((t / 1000) % 60);