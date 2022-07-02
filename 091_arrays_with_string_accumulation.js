// https://code.mu/ru/javascript/book/prime/loops/string-accumulation-array-filling/


// Задача 1
// С помощью цикла сформируйте следующий массив:
// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

const arr1 = [];
let str1 = '';

for (let i = 0; i < 5; i++) {
    str1 += 'xx';
	arr1.push(str1);
}



// Задача 2
// С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

let arr2 = [];

for (let i = 1; i < 6; i++) {
	let str2 = '';
	
	for (let j = 0; j < 5; j++) {
		str2 += i;
	}
	
	arr2.push(str2);
}

console.log(arr2);