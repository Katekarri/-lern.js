// https://code.mu/ru/javascript/book/prime/time/object-Date/

// №1
// Выведите на экран текущий день.

const dayNew = new Date();
console.log(dayNew.getDate());

// №2
// Выведите на экран текущий месяц.

const monthNew = new Date();
console.log(monthNew.getMonth());

// №3
// Выведите на экран текущий год.

const yearNew = new Date();
console.log(yearNew.getFullYear());


// years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12)),
// months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12),
// days = Math.floor(t / (1000 * 60 * 60 * 24) % 30),
// hours = Math.floor((t / (1000 * 60 * 60)) % 24),
// minutes = Math.floor((t / (1000 * 60)) % 60),
// seconds = Math.floor((t / 1000) % 60);