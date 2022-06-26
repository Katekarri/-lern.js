// https://code.mu/ru/javascript/book/prime/loops/fibonacci-numbers/

//числа Фибоначчи. Данные числа представляют собой последовательность, в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел

// Задача 1
// Разберите мое решение описанной задачи, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.


let firstNum = 0;
let secondNum = 1;

for (let i = 1; i <= 10; i++) {
  const currentNum = firstNum + secondNum;
  firstNum = secondNum;//?
  secondNum = currentNum;//?
  console.log(currentNum);
}


// Задача 2
// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.


let firsNumber = 0;
let secondNumber = 1;
let thirdNumber = 3;

for (let i = 1; i <= 10; i++) {
  const current2 = firsNumber + secondNumber + thirdNumber;
	
  firsNumber = secondNumber;
  twsecondNumbero = thirdNumber;
  thirdNumber = current2;
	
  console.log(current2);
}