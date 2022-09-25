var name = 'John';

function printName() {
  console.log(name)
  var name = 'Peter';
  console.log(name);
    
}

printName();

///
let name = 'John';
function printName() {
  let name = 'Peter';
  console.log(name);
}
printName();

////

(
  function(a) {
    arguments[0] = 10;
    return a;
  }
)(5);

///

printMessage();

function printMessage() {
  console.log('Hello');
}

////

const detalis = {
  name:'John',
}

function getMessage(message) {
  return `${message} ${this.name}`
}

console.log(getMessage.apply(detalis,['Hello']));

///

for(let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
}

///

// 'use strict'

function getThis() {
  return this;
}

console.log(getThis());

///

// 'use strict'

const detalis1 = {
  massage: 'Hello!',
}

function getMessage() {
  return this.massage;
}

console.log(getMessage.call(detalis1));

//

function foo() { console.log(this); }
foo.call(null);

////

var a = 1; b = function a(x) { x && a(--x); };
console.log(a);

///

for(var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i)
  }, 1000)
}

///

const foo = bar();
const number = 2;

function bar() { return number; }

////

var name = 'John';


var user = {
  name:'Peter',
  printMassage() {
    console.log(`hello, ${this.name}!`);
  }
};

var printMassage = user.printMassage;
printMassage();

///

let f = function g() { return 23; };

console.log(typeof g());


///

console.log(massage);
let massage = 'hello!';

///

console.log(massage1);
var massage1 = 'hello!';

//

function foo(a, b) {
  return a * b;
}
 const bar = foo.bind(null, 2);
  bar(2);

///

function foo() {
   return { bar:1};
}

console.log(typeof foo().bar);

////

let name = 'John';
function printName() {
  console.log(name)
}
 setTimeout(() => {
  let name = 'Peter';
  printName();
 }, 1000);

 ///
 for(var i = 0; i < 10; i++) {

 }
 console.log(i);
