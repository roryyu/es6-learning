"use strict";
// generator
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}
/**
Even though yield is technically inside the createIterator() function, The
yield keyword is similar to return in that a nested function cannot return a
value for its containing function.

*/
function *createIterator2(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator = createIterator();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3

let iterator2 = createIterator2([1,2,4,5,13,1]);
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

let o = {
    *createIterator(items) {
        for (let i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};
let iterator3 = o.createIterator([1, 2, 3]);
console.log(iterator3.next())


let values = [1, 2, 3];
let iterator4 = values[Symbol.iterator]();
console.log(iterator4.next()); // "{ value: 1, done: false }"
console.log(iterator4.next()); // "{ value: 2, done: false }"
console.log(iterator4.next()); // "{ value: 3, done: false }"
console.log(iterator4.next()); // "{ value: undefined, done: true }"


function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}
console.log(isIterable([1, 2, 3])); // true
console.log(isIterable("Hello")); // true
console.log(isIterable(new Map())); // true
console.log(isIterable(new Set())); // true
console.log(isIterable(new WeakMap())); // false
console.log(isIterable(new WeakSet())); // false
console.log("-----------------------------------")
let collection = {
    items: [],
    *[Symbol.iterator]() {
        for (let item of this.items) {
            yield item;
        }
    }
};
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
    console.log(x);
}
console.log("-----------------------------------")
let colors = [ "red", "green", "blue" ];
let tracking = new Set([1234, 5678, 9012]);
let data = new Map();
data.set("title", "Understanding ECMAScript 6");
data.set("format", "ebook");
for (let entry of colors.entries()) {
    console.log(entry);
}
for (let entry of tracking.entries()) {
    console.log(entry);
}
for (let entry of data.entries()) {
    console.log(entry);
}

for (let value of tracking.values()) {
    console.log(value);
}
for (let value of data.values()) {
    console.log(value);
}
for (let key of colors.keys()) {
    console.log(key);
}
for (let key of tracking.keys()) {
    console.log(key);
}
for (let key of data.keys()) {
    console.log(key);
}
for (let value of colors) {
    console.log(value);
}
// same as using tracking.values()
for (let num of tracking) {
    console.log(num);
}
// same as using data.entries()
for (let entry of data) {
    console.log(entry);
}
console.log("-----------------------------------")
var message = "AXX𠮷YYB";
for (let c of message) {
    console.log(c);
}

let smallNumbers = [1, 2, 3],
bigNumbers = [100, 101, 102],
allNumbers = [0, ...smallNumbers, ...bigNumbers];
console.log(allNumbers.length); // 7
console.log(allNumbers);
console.log("-----------------------------------")
function *createIterator3() {
    let first = yield 1;
    let second = yield first + 2; // 4 + 2
    yield second + 3; // 5 + 3
}
let iterator5 = createIterator3();
console.log(iterator5.next());
console.log(iterator5.next(4));
console.log(iterator5.next(5));
console.log(iterator5.next());
console.log("-----------------------------------")
function *createIterator4() {
    let first = yield 1;
    let second;
try {
    second = yield first + 2; // yield 4 + 2, then throw
} catch (ex) {
    second = 6; // on error, assign a different value
}
    yield second + 3;
}
let iterator6= createIterator4();
console.log(iterator6.next()); // "{ value: 1, done: false }"
console.log(iterator6.next(4)); // "{ value: 6, done: false }"
console.log(iterator6.throw(new Error("Boom"))); // "{ value: 9, done: false }"
console.log(iterator6.next());

console.log("-----------------------------------")
function *createIterator5() {
    yield 1;
    return 42;
    yield 2;
    yield 3;
}
let iterator7 = createIterator5();
console.log(iterator7.next()); // "{ value: 1, done: false }"
console.log(iterator7.next());
console.log("-----------------------------------")
function *createNumberIterator() {
    yield 1;
    yield 2;
}
function *createColorIterator() {
    yield "red";
    yield "green";
}
function *createCombinedIterator() {
    yield *createNumberIterator();
    yield *createColorIterator();
    yield true;
}
var iterator8 = createCombinedIterator();
console.log(iterator8.next()); // "{ value: 1, done: false }"
console.log(iterator8.next()); // "{ value: 2, done: false }"
console.log(iterator8.next()); // "{ value: "red", done: false }"
console.log(iterator8.next()); // "{ value: "green", done: false }"
console.log(iterator8.next()); // "{ value: true, done: false }"
console.log(iterator8.next());
console.log("-----------------------------------")
function *createNumberIterator2() {
    yield 1;
    yield 2;
    return 3;
}
function *createRepeatingIterator2(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}
function *createCombinedIterator2() {
    let result = yield *createNumberIterator2();
    yield result;
    yield *createRepeatingIterator2(result);
}
var iterator9 = createCombinedIterator2();
console.log(iterator9.next()); // "{ value: 1, done: false }"
console.log(iterator9.next()); // "{ value: 2, done: false }"
console.log(iterator9.next()); // "{ value: 3, done: false }"
console.log(iterator9.next()); // "{ value: "repeat", done: false }"
console.log(iterator9.next()); // "{ value: "repeat", done: false }"
console.log(iterator9.next()); // "{ value: "repeat", done: false }"
console.log(iterator9.next()); // "{ value: undefined, done: true }"

console.log("-----------------------------------")
function run(taskDef) {
// create the iterator, make available elsewhere
    let task = taskDef();
// start the task
    let result = task.next();

// recursive function to keep calling next()
    function step() {
        console.log(result)
    // if there's more to do
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
// start the process
    step();
}
let fs = require("fs");
function readFile(filename) {
    return function(callback) {
        fs.readFile(filename, callback);
    };
}
run(function*() {
    let contents = yield readFile("test.json");
    //console.log(contents);
    console.log("Done");
    return "Finished";
});
