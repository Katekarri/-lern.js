// https://code.mu/ru/javascript/book/prime/loops/pyramids-loops-creating/


// Задача 1
// Выведите на экран следующую пирамидку:
// xx
// xxxx
// xxxxxx
// xxxxxxxx
// xxxxxxxxxx


// let str = '';

// for (let i = 0; i < 5; i++) {
//   str += 'x';
//   document.write(str + '<br>');
// }
//

let str1 = '';

for (let i = 1; i <= 5; i++) {
  str1 += 'xx';
  console.log(str1);
}


// Задача 2
// Выведите на экран следующую пирамидку:
// 1
// 333
// 55555
// 7777777
// 999999999

// for (let i = 1; i <= 10; i+=2) {
//   let str2 = '';
//   for (let j = 1; j <= i; j++) {
//     str2 += i;
//   }
//   console.log(str2);
// }



for (let i = 1; i <= 9; i+=2) {
  let str = '';
	
	for (let j = 1; j <= i; j++) {
		str += i;
	}	
	document.write('<br>' + str + '</br>');
}
 


// Задача 3
// Выведите на экран следующую пирамидку:
// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx


for (let i = 5; i >= 1; i--) {
  let str3 = '';
  for (let j = 0; j < i; j++) {
    str3 += 'xx'
  }
  document.write('<br>' + str3 + '</br>');
}


// Задача 4
// Выведите на экран следующую пирамидку:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1


for (let i = 9; i >= 1; i--) {
  let  str4 = '';
  for (let j = 0; j < i; j++) {
    str4 += i;
  }
  console.log(str4);
}



