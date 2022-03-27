// 1. У вас есть 5 чисел. Найдите наибольшее и наименьшее из них
  let example3 = [73, 1, 8, -15, 0];
for (let i = 0; i < example3.length; i++) {
  if (example3[i] = 73) {
  console.log(example3[i]);
  }
  if (example3[i] = -15) {
    console.log(example3[i])
  }
    
}

// 2. У вас есть массив
// const arr = [ "Hi", "Hello", "Bonjour"];
// Добавьте к нему еще один элемент в конец, чтобы получился следующий массив
// [ "Hi", "Hello", "Bonjour", "Hola"]

const arr = ["Hi", "Hello", "Bonjour"];
arr[3] = "Hola";
// console.log(arr);

const arr2 = ["Hi", "Hello", "Bonjour"];
arr2.push("Hola");
// console.log(arr2);

// 3. Есть 2 массива
// сonst a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// Объедините их с помощью цикла, чтобы получилось
// ['a', 'b', 'c', 1, 2, 3]

let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
let c = a.concat(b);
alert(c);


// 4. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

let example4 = [1, 2, 3];
let example4Reverse = example4.reverse();
console.log(example4Reverse);


let exampleSecond = [1, 2, 3];
for (i = 3; i >= 1; i--){
  alert([i]);
}

// 5. У нас есть некий массив с данными:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Проверьте, есть ли в этом массиве значение Banana

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (i = 0; i < fruits.length; i++){
  if (fruits[0]) { 
  }    
}
// console.log("Banana")


// 6. Удалите из этого массива элемент 5.
// const array = [2, 5, 9];

// let example6 = [2, 5, 9];
// let example6A = example6.splice(1);
// alert(example6A);

let example6 = [2, 5, 9];
let example6A = example6.indexOf(5);
if (example6A !== -1) {
    example6.splice(example6A, 1);
}
// console.log(example6)
