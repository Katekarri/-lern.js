// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0)
