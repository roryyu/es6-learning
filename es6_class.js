"use strict";
/*
• Class declarations, unlike function declarations, are not hoisted. Class
declarations act like let declarations, so they exist in the temporal dead
zone until execution reaches the declaration.
• All code inside class declarations runs in strict mode automatically.
There’s no way to opt out of strict mode inside classes.
• All methods are nonenumerable. This is a significant change from
custom types, where you need to use Object.defineProperty() to make a
method nonenumerable.
• All methods lack an internal [[Construct]] method and will throw an
error if you try to call them with new.
• Calling the class constructor without new throws an error.
• Attempting to overwrite the class name within a class method throws
an error.
*/
let methodName = "sayName2";
class PersonClass {
    constructor(name) {
        this.name = name;
    }
    static calling(name) {
        console.log('call '+name);
    }
    sayName() {
        console.log(this.name);
    }
    [methodName]() {
        console.log(2,this.name);
    }
    get address() {
        return 'address is '+this._address;
    }
    set address(v) {
        this._address= v
    }
}
let PersonClass2 = class {
    // equivalent of the PersonType constructor
    constructor(name) {
        this.name = name;
    }
    // equivalent of PersonType.prototype.sayName
    sayName() {
        console.log(this.name);
    }
};

let person = new PersonClass("Nicholas");
person.address='shanghai';
//person.address="shanghai"
console.log(person)
console.log(person.address)
PersonClass.calling('rory');
person.sayName();
person.sayName2();
console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true
console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass.prototype.sayName); // "function"
console.log(typeof PersonClass2);

// direct equivalent of PersonClass
let PersonType2 = (function() {
    "use strict";
    const PersonType2 = (
        function(){
            function PersonType2(name) {
                // make sure the function was called with new
                if (typeof new.target === "undefined") {
                    throw new Error("Constructor must be called with new.");
                }
                this.name = name;
            }
            return PersonType2;
        }
    )();
    Object.defineProperty(PersonType2.prototype, "sayName", {
        value: function() {
            // make sure the method wasn't called with new
            if (typeof new.target !== "undefined") {
                throw new Error("Method cannot be called with new.");
            }
            console.log(this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonType2;
}());
let p2=new PersonType2('jake');
console.log(p2)

console.log("------------------------------------")
function createObject(classDef) {
    return new classDef();
}
let obj = createObject(class {
    sayHi() {
        console.log("Hi!");
    }
});
obj.sayHi();
console.log("------------------------------------")
class Collection {
    constructor() {
        this.items = new Set();
    }
    *[Symbol.iterator]() {
        yield *this.items.values();
    }
}
var collection = new Collection();
collection.items.add(1);
collection.items.add(2);
collection.items.add(3);
for (let x of collection) {
    console.log(x);
}
console.log("------------------------------------")
class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("This class cannot be instantiated directly.")
        }
    }
}
class Rectangle extends Shape{
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
    static create(length, width) {
        return new Rectangle(length, width);
    }
}
class Square extends Rectangle {
    constructor(length) {
        // equivalent of Rectangle.call(this, length, length)
        super(length, length);
    }
    getArea() {
        return super.getArea()+'m^2';
    }
}
var square = new Square(3);
console.log(square.getArea())
var rect = Square.create(3, 4);
console.log("rect instanceof Shape",rect instanceof Shape);
console.log("rect instanceof Rectangle",rect instanceof Rectangle); // true
console.log("rect instanceof Shape",rect instanceof Square); // false
console.log("square instanceof Shape",square instanceof Square);
console.log(rect.getArea());


console.log("------------------------------------")
function RectangleMixin(length, width) {
    this.length = length;
    this.width = width;
}
RectangleMixin.prototype.getArea = function() {
    return this.length * this.width;
};
class Square2 extends RectangleMixin {
    constructor(length) {
        super(length, length);
    }
}
var x = new Square2(3);
console.log(x.getArea()); // 9
console.log(x instanceof RectangleMixin);

let SerializableMixin = {
    serialize() {
        return JSON.stringify(this);
    }
};
let AreaMixin = {
    getArea() {
        return this.length * this.width;
    }
};
function mixin(...mixins) {
    var base = function() {};
    Object.assign(base.prototype, ...mixins);
    return base;
}
class MixinSquare extends mixin(AreaMixin, SerializableMixin) {
    constructor(length) {
        super();
        this.length = length;
        this.width = length;
    }
}
var x2 = new MixinSquare(3);
console.log(x2.getArea()); // 9
console.log(x2.serialize());

class MyArray extends Array {
// empty
}
var colors = new MyArray();
colors[0] = "red";
console.log(colors.length);
console.log("------------------------------------")
class MyClass {
    static get [Symbol.species]() {
        return this;
    }
    constructor(value) {
        console.log(new.target);
        this.value = value;
    }
    clone() {
        return new this.constructor[Symbol.species](this.value);
    }
}
class MyDerivedClass1 extends MyClass {
// empty
}
class MyDerivedClass2 extends MyClass {
    static get [Symbol.species]() {
        return MyClass;
    }
}
let instance1 = new MyDerivedClass1("foo"),
clone1 = instance1.clone(),
instance2 = new MyDerivedClass2("bar"),
clone2 = instance2.clone();

console.log(clone1 instanceof MyClass); // true
console.log(clone1 instanceof MyDerivedClass1); // true
console.log(clone2 instanceof MyClass); // true
console.log(clone2 instanceof MyDerivedClass2); // false
console.log("------------------------------------")
let p1 = {
    getGreeting() {
        return "Hello";
    }
};
let d1 = {
    getGreeting() {
        return "Woof";
    }
};
// prototype is person
let f1 = {
    __proto__: p1
};
console.log(f1.getGreeting()); // "Hello"
console.log(Object.getPrototypeOf(f1) === p1); // true
console.log(f1.__proto__ === p1); // true
// set prototype to dog
f1.__proto__ = d1;
console.log(f1.getGreeting()); // "Woof"
console.log(f1.__proto__ === d1); // true
console.log(Object.getPrototypeOf(f1) === d1);
