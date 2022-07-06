// https://code.mu/ru/javascript/book/prime/multidimensionality/multi-objects/

// Задача 1
// Дан следующий объект:
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.

const obj1 = {
  user1: {
    name: 'Luk',
    age: 2,
  },
  user2: {
    name: 'Kate',
    age: 5,
  },
  user3: {
    name: 'Jon',
    age: 8,
  },
}

let sumElemObj1 = 0;
for (let i = 1; i <= 3; i++) { 
  for (let j = 1; j <= 3; j++ ) {
    sumElemObj1 += obj1['key' + i]['key' + j];// эту строчку решила не сама. Не смогла разобраться почему 'key' + i и 'key' + j
  }
}


// Задача 2
// Дан следующий объект:
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// Выведите на экран элемент 'b2' и элемент 'c1'.

const obj2 = {
  1: {
    1: 'a1',
    2: 'a2',
    3: 'a3',
  },
  2: {
    1: 'b1',
    2: 'b2',
    3: 'b3',
  },
  3: {
    1: 'c1',
    2: 'c2',
    3: 'c3',
  },
}

console.log(obj2[2][2] + ',' + obj2[3][1]);

// Задача 3
// Дан следующий объект:
// let obj = {
// 	key1: {
// 	a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }
// Найдите сумму всех элементов-чисел.
 
const obj3 = {
  key1: {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    }, 
    f: 5,
  },
  key2: {
    g: 6,
    h: 7,
  },
  // key3: 199,
}
let result = 0;
for (const key1 in obj3) {
  // console.log(key1);
  const value1 = obj3[key1];
  // console.log(value1)
  if (typeof(value1) === 'object') {
    for (const key2 in value1) {
      // console.log(key2);
      const value2 = value1[key2];
        if (typeof(value2) === 'object') {
          for (const key3 in value2) {
            result += value2[key3];
          }
        } else {
          result += value2;
        }    
    }
  } else {
    result += value1;
  } 
}

console.log(result);

// function sumInObj(obj3) {
// let result = 0;
  
// if (typeof(obj3) === 'object') {
//   for (const key in obj3) {
//     if (typeof(obj3[key]) != 'object') {
//       result += obj3[key];
//        } else {
//         const subObj = obj3[key];
//           result += sumInObj(subObj); 
//       }
//     }
//     return result;
// } else {
//    return obj3;
//   }
// }
// console.log(sumInObj(obj3));


//это мрак ужас и кошмар. как первую задачу не получилось решить, вообще на тему многомернвх объектов суммы свойств информации мало , нашла только что надо проверять на тип , это логично . но все равно картина не сложилась и полное решение через функцию не мое. если можно будет тебя послушать на эту тему было бы здорово. или может есть ссылка , почитаю