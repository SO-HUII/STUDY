// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declartion
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// else.d. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);


// 2. Parameters
// premitive parameters: passed by value 
// objects parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const sohui = { name: 'sohui' };
changeName(sohui);
console.log(sohui);


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 2. Rest parameters (added in ES6)
function printAll(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    for(const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'sohui');


// 5. Local scope  // 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';  // global variable
function printMessage() {
    let message = 'hello';  // 지역변수 (안에서만 접급 가능. 밖에서 출력할 시 에러발생)
    console.log(message);  // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);  // error
    // return undefined;
}
printMessage();


// 6. Return a value
function sum(a,b) {
    return a + b;
}
const result = sum(1, 2);  // 3
console.log(`sum: ${sum(1, 2)}`);


// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    // long upgrade logic ...
}


// Fist-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression  
// a function declaration can be called earlier than it is defined. (hoisted) 
// a function expression is created when the execution reaches it. 
const print = function () {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain  = sum;
console.log(sumAgain(1, 3));


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debuging in debugger's stack traces
// recursions
const printNo = function () {
    console.log('no!');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint');
};
// =
const simplePrint1 = () => console.log('simplePrint');

const add = (a,b) => a + b;
// =
const simpleMultiply = (a, b) => {
    // do something more ...
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();