"use strict";

function makeRequest(url, timeout = 2000, callback = function() {}) {
// the rest of the function
console.log(url,timeout,callback);
}
makeRequest();

function mixArgs(first, second = "b") {
    console.log(arguments.length);
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
mixArgs("a");
console.log('-----------------------------------------');
function getValue(value) {
    return value + 5;
}
function add(first, second = getValue(first)) {
    return first + second;
}
console.log(add(1, 1)); // 2
console.log(add(1));
console.log('-----------------------------------------');
function pick(object, ...keys) {
    let result = Object.create(null);
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}
let book = {
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    year: 2016
};
let bookData = pick(book, "author", "year");
console.log(bookData);
console.log('-----------------------------------------');
function checkArgs(...args) {
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}
checkArgs("a", "b");

console.log('-----------------------------------------');
let values = [25, 50, 75, 100]
console.log(Math.max.apply(Math, values)); // 100
console.log(Math.max(...values));
console.log(Math.max(...values,125));
console.log('-----------------------------------------');
function doSomething() {
// empty
}
console.log(doSomething.name);
var doThatthing = function() {
// empty
};
console.log(doThatthing.bind().name); // "bound doSomething"
console.log((new Function()).name);

function Person(name) {
    if (typeof new.target !== "undefined") {
        console.log(typeof new.target,new.target === Person)
        this.name = name;
    } else {
        throw new Error("You must use new with Person.")
    }
}
var person = new Person("Nicholas");
//var notAPerson = Person.call(person, "Michael"); // error!
console.log('-----------------------------------------');
if (true) {
    console.log(typeof doSomething2); // "function"
    function doSomething2() {
    // empty
    }
    doSomething2();
}
console.log(typeof doSomething2);

//Arrow Functions
console.log('-------------Arrow Functions--------------');
//No this, super, arguments, and new.target bindings
//Cannot be called with new
//No prototype
//Can’t change this
//No arguments object
//No duplicate named parameters
let reflect = value => value;
let sum = (num1, num2) => num1 + num2;
let getName = () => "Nicholas";
let getTempItem = id => ({ id: id, name: "Temp" });
let doOnething = () => { console.log('doOnething')};
console.log(reflect(1),sum(1,2),getName(),getTempItem('id001'));
doOnething();
console.log(sum.call(null, 1, 2));
console.log(sum.apply(null, [1, 2]));
var boundSum = sum.bind(null, 1, 2);
console.log(boundSum());

let person2 = ((name) => {
    return {
        getName: function() {
            return name;
        }
    }
});
console.log(person2('my name').getName())

var result = [3,2,15,16,5,131,1,12].sort((a, b) => a - b);
console.log(result);

function createArrowFunctionReturningFirstArg() {
    return () => arguments[0];
}
var arrowFunction = createArrowFunctionReturningFirstArg(5);
console.log(arrowFunction());

console.log('-----------------------------------------');
let lastName = "last name";
let person3 = {
    "first name": "Nicholas",
    [lastName]: "Zakas"
};
console.log('-----------------------------------------');
console.log(person3["first name"]); // "Nicholas"
console.log(person3[lastName]);

console.log(+0 == -0); // true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false

console.log('-----------------------------------------');
function EventTarget() { /*...*/ }
EventTarget.prototype = {
    constructor: EventTarget,
    emit: function() { /*...*/ },
    on: function() { /*...*/ }
}
var myObject = {}
Object.assign(myObject, EventTarget.prototype);
console.log(myObject)
myObject.emit("somethingChanged");

var receiver = {};
var supplier = {
    get name() {
        return "file2.js"
    }
};
Object.assign(receiver,
    {
        type: "js",
        name: "file.js"
    },
    {
        type: "css"
    }
);
Object.assign(receiver,supplier);
console.log(receiver);

var obj1 = {
    a: 1,
    0: 1,
    c: 1,
    2: 1,
    b: 1,
    1: 1
};
console.log(Object.getOwnPropertyNames(obj1))

let animal = {
    getGreeting() {
        return "Hello";
    }
}
let animal2 = {
    getGreeting() {
        return "Wf";
    }
}
let dog = {
    getGreeting() {
        return "Woof";
    }
};
let dog2 = {
    getGreeting() {
        return super.getGreeting() + ", hi!";
    }
};
Object.setPrototypeOf(dog,animal);
Object.setPrototypeOf(dog2,animal2);
console.log(dog.getGreeting()); // "Woof"
console.log(dog2.getGreeting());
console.log(Object.getPrototypeOf(dog) === animal); // true
