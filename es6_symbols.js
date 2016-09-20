"use strict";

let firstName = Symbol("first name");
let lastName = Symbol("last name");
console.log(firstName)

let person = {
    [firstName]: "Nicholas",
    [lastName]:"Zakas"
};

Object.defineProperty(person, firstName, { writable: false });

console.log(person)
console.log(person[firstName]);
//person[firstName]="Changed";//Cannot assign to read only property
person[lastName]="Axxx";
console.log(person[lastName]);

let uid = Symbol.for("uid");
let object = {};
object[uid] = "12345";

let uid2=Symbol.for("uid");
console.log(object[uid2])
console.log(Symbol.keyFor(uid));
console.log(Symbol.keyFor(uid2));

let symbols = Object.getOwnPropertySymbols(object);
console.log(symbols.length); // 1
console.log(symbols[0]); // "Symbol(uid)"
console.log(object[symbols[0]]); // "12345"

function Foo(greeting) {
    this.greeting = greeting;
}
Object.defineProperty(Foo, Symbol.hasInstance, { writable: true });
Object.defineProperty( Foo, Symbol.hasInstance, {
    value: function(inst) {
        return inst.greeting == "hello";
    }
} );

var a = new Foo( "hello" ),
    b = new Foo( "world" );

console.log(Foo[Symbol.hasInstance](a));           // true
console.log(Foo[Symbol.hasInstance](b));

let collection = {
    0: "Hello",
    1: "world",
    length: 2,
    [Symbol.isConcatSpreadable]: true
};
let messages = [ "Hi" ].concat(collection);
console.log(messages.length); // 3
console.log(messages);

let hasLengthOf10 = {
    [Symbol.match]: function(value) {
        return value.length === 10 ? [value.substring(0, 10)] : 'over';
    },
    [Symbol.replace]: function(value, replacement) {
        return value.length === 10 ? replacement + value.substring(10) : value;
    },
    [Symbol.search]: function(value) {
        return value.length === 10 ? 0 : -1;
    },
    [Symbol.split]: function(value) {
        return value.length === 10 ? ["", ""] : [value];
    }
};

let message1 = "Hello John CXCC"
let match1 = message1.match(hasLengthOf10);
console.log(match1); // ["Hello John"]


function Temperature(degrees) {
    this.degrees = degrees;
}
Temperature.prototype[Symbol.toPrimitive] = function(hint) {
    switch (hint) {
        case "string":
        return this.degrees + "\u00b0"; // degrees symbol
        case "number":
        return this.degrees;
        case "default":
        return this.degrees + " degrees";
    }
};
var freezing = new Temperature(32);
console.log(freezing + "!"); // "32 degrees!"
console.log(freezing / 2); // 16
console.log(String(freezing)); // "32°"

function Person(name) {
    this.name = name;
}
Person.prototype[Symbol.toStringTag] = "Person X";
Person.prototype.toString = function() {
    return this.name;
};
var me = new Person("Nicholas");
console.log(me.toString()); // "Nicholas"
console.log(Object.prototype.toString.call(me)); // "[object Person]"
