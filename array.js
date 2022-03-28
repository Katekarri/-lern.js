// 1. У вас есть 5 чисел. Найдите наибольшее и наименьшее из них
 let example3 = [73, 5, 8, -15, 0, 1, 548, -569];
let minNumber = example3[0];
let maxNumber = example3[0];
for (let i = 1; i < example3.length; i++) {// 1 чтобы иключить лишнюю итерацию сравнения первого числа с самим собой
  if (example3[i] < minNumber) {
     minNumber = example3[i];
  }
  if (example3[i] > maxNumber) {
    maxNumber = example3[i];
  }
    
}
// console.log(minNumber)
// console.log(maxNumber)



// 2. У вас есть массив
// const arr = [ "Hi", "Hello", "Bonjour"];
// Добавьте к нему еще один элемент в конец, чтобы получился следующий массив
// [ "Hi", "Hello", "Bonjour", "Hola"]

const arr = ["Hi", "Hello", "Bonjour"];
arr[arr.length] = "Hola";
// console.log(arr)

const arr2 = ["Hi", "Hello", "Bonjour"];
arr2.push("Hola");
// console.log(arr2);



// 3. Есть 2 массива
// сonst a = ['a', 'b', 'c'];
// const b = [1, 2, 3];
// Объедините их с помощью цикла, чтобы получилось
// ['a', 'b', 'c', 1, 2, 3]

// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// let c = a.concat(b);
// alert(c);

let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
for ( i = 0; i < b.length; i++){
  a.push(b[i]);
}
 alert(a);



// let a = ['a', 'b', 'c'];//тоже интеесно сработало
// let b = [1, 2, 3];
// let c = [...a, ...b]
// alert(c);


// let a = ['a', 'b', 'c'];
// let b = [1, 2, 3];
// for (i = 0; i < b.length; i++){
//   a.push(b[i])
// }
// alert(a);




// 4. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1] / ['c', 'k', 'z', 't', 's'];

let example4 = [1, 2, 3];
let example4Reversed = example4.reverse();
// console.log(example4Reversed);


let exampleSecond = ['c', 'k', 'z', 't', 's'];
let exampleSecondReversed = [];
for (i = exampleSecond.length - 1; i >= 0; i--){
 exampleSecondReversed.push(exampleSecond[i]);
}
// console.log(exampleSecondReversed);


// 5. У нас есть некий массив с данными:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Проверьте, есть ли в этом массиве значение Banana

const fruits = ["Banana", "Orange", "Apple", "Mango"];
for (i = 0; i < fruits.length; i++){
  if (fruits[i] == "Banana") { 
    console.log(fruits[i])
  }    break;
}

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
