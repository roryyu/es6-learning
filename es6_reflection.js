"use strict";
let target = {
    name:'target'
};
let proxy = new Proxy(target, {
        set(trapTarget, key, value, receiver) {
        // ignore existing properties so as not to affect them
            if (!trapTarget.hasOwnProperty(key)) {
                if (isNaN(value)) {
                    throw new TypeError("Property must be a number.");
                }
            }
            return Reflect.set(trapTarget, key, value, receiver);
        },
        get(trapTarget, key, receiver) {
            console.log("get:"+key);
            if (!(key in receiver)) {
                throw new TypeError("Property " + key + " doesn't exist.");
            }
            return Reflect.get(trapTarget, key, receiver);
        },
        has(trapTarget, key) {
            console.log("has:"+key);
            return Reflect.has(trapTarget, key);
        },
        getPrototypeOf(trapTarget) {
            console.log("getPrototypeOf")
            return Reflect.getPrototypeOf(trapTarget);
        },
        setPrototypeOf(trapTarget, proto) {
            console.log("setPrototypeOf")
            return Reflect.setPrototypeOf(trapTarget, proto);
        },
        isExtensible(trapTarget) {
            console.log("isExtensible")
            return Reflect.isExtensible(trapTarget);
        },
        preventExtensions(trapTarget) {
            console.log("preventExtensions")
            return Reflect.preventExtensions(trapTarget);
        },
        defineProperty(trapTarget, key, descriptor) {
            console.log("defineProperty"+" key:" + typeof key);

            //if (typeof key === "symbol") {
                //return false;
            //}
            return Reflect.defineProperty(trapTarget, key, descriptor);
        },
        getOwnPropertyDescriptor(trapTarget, key) {
            console.log("getOwnPropertyDescriptor")
            return Reflect.getOwnPropertyDescriptor(trapTarget, key);
        },
        ownKeys(trapTarget) {
            console.log('trapTarget',trapTarget)
            return Reflect.ownKeys(trapTarget).filter(key => {
                return typeof key !== "string" || !/^_/.test(key);
            });
        }
    }
);
console.log("-----------start--------------------")
proxy.name = "proxy";
let nameSymbol = Symbol("name");
proxy['_name'] = 1;
proxy[nameSymbol] = 2;
console.log('Object.keys(proxy):'+Object.keys(proxy));
console.log('Object.getOwnPropertySymbols(proxy):'+Object.getOwnPropertySymbols(proxy).length);
console.log(target);
console.log("------------------------------------")
console.log(proxy.name); // "proxy"
console.log("------------------------------------")
console.log(target.name); // "proxy"
console.log("------------------------------------")
console.log("name" in proxy);
console.log("------------------------------------")
target.name = "target";
console.log("------------------------------------")
console.log(proxy.name); // "target"
console.log("------------------------------------")
console.log(target.name); // "target"
console.log("------------------------------------")
proxy.count = 1;
console.log("------------------------------------")
console.log(proxy.count); // 1
console.log("------------------------------------")
console.log(target.count); // 1
console.log("------------------------------------")
//proxy.anotherName = "proxy";TypeError: Property must be a number.
//console.log(proxy.nnm);//Property nnm doesn't exist.

Object.setPrototypeOf(proxy, {
    sayHi:function(){
        console.log("say Hi!");
    }
});
target.sayHi();
let targetProto = Object.getPrototypeOf(target);
let proxyProto = Object.getPrototypeOf(proxy);
console.log(targetProto)
console.log(proxyProto)
console.log("----------isExtensible------------------------")
console.log(Object.isExtensible(target)); // true
console.log(Object.isExtensible(proxy)); // true
Object.preventExtensions(proxy);
console.log(Object.isExtensible(target)); // false
console.log(Object.isExtensible(proxy)); // false
//TypeError: 'defineProperty' on proxy: trap returned falsish for property 'Symbol(name)'
//let nameSymbol = Symbol("name");
//Object.defineProperty(proxy, nameSymbol, {
    //value: "proxy"
//});

console.log("------------------------------------")
let target2 = {
    name: "target",
    value: 42
};
Object.defineProperty(target2, "name", { configurable: false });


//delete target2.name;//Cannot delete property 'name'
console.log("------------------------------------")
let target11 = { name:'target11'};
let result11 = Object.setPrototypeOf(target11, {
    sayHi:function(){
        console.log("say Hi!");
    }
});
console.log(result11 === target11);// true
console.log(result11,target11)
let target12 = { name:'target12'};
let result12 = Reflect.setPrototypeOf(target12, {
    sayHi:function(){
        console.log("say Hi!");
    }
});
console.log(result12 === target12); // false
console.log(result12,target12)

let r1 = Object.isExtensible(2);
//let r2 = Reflect.isExtensible(2);//Reflect.isExtensible called on non-object
let r3 = Object.preventExtensions(2);
let r4 = Reflect.preventExtensions(target);
//let r5 = Reflect.preventExtensions(2);//Reflect.isExtensible called on non-object
console.log(r1,r3,r4)
console.log("------------------------------------")
let targetfn = function() { return 42; }
targetfn.prototype.sayHi=function(){
    console.log('targetfn sayHi')
}
let proxyfn=new Proxy(targetfn,{
        apply: function(trapTarget, thisArg, argumentList) {
            console.log('apply')
            //throw new TypeError("This function must be called with new.");
            return Reflect.apply(trapTarget, thisArg, argumentList);
        },
        construct: function(trapTarget, argumentList) {
            console.log('construct')
            return Reflect.construct(trapTarget, argumentList);
        }
})
var instance = new proxyfn();
console.log(proxyfn())
instance.sayHi();
console.log("------------------------------------")
function sum(...values) {
    return values.reduce((previous, current) => previous + current, 0);
}
let sumProxy = new Proxy(sum, {
    apply: function(trapTarget, thisArg, argumentList) {
        let as=[];
        argumentList.forEach((arg) => {
            if (typeof arg !== "number") {
                console.log(arg+" is not number.");
            }else{
                as.push(arg)
            }
        });
        return Reflect.apply(trapTarget, thisArg, as);
    },
    construct: function(trapTarget, argumentList) {
        throw new TypeError("This function can't be called with new.");
    }
});
console.log(sumProxy(1, 2, 3, 4));
console.log(sumProxy(1, "2", 3, 4));
console.log("------------------------------------")
class AbstractNumbers {
    constructor(...values) {
        if (new.target === AbstractNumbers) {
            throw new TypeError("This function must be inherited from.");
        }
        this.values = values;
    }
}
let AbstractNumbersProxy = new Proxy(AbstractNumbers, {
    construct: function(trapTarget, argumentList) {
        return Reflect.construct(trapTarget, argumentList, function() {});
    }
});
let instance2 = new AbstractNumbersProxy(1, 2, 3, 4);
console.log(instance2.values);
console.log("------------------------------------")
class Person {
    constructor(name) {
        this.name = name;
    }
}
let PersonProxy = new Proxy(Person, {
    apply: function(trapTarget, thisArg, argumentList) {
        return new trapTarget(...argumentList);
    }
});
let me = PersonProxy("Nicholas");
console.log(me.name); // "Nicholas"
console.log(me instanceof Person); // true
console.log(me instanceof PersonProxy); // true
console.log("------------------------------------")
let target3 = {
    name: "target"
};
let { proxy:proxy3, revoke } = Proxy.revocable(target3, {});
proxy3.name = 'proxy';
console.log(proxy3); // "target"
revoke();
console.log(target3);
// throws an error
//console.log(proxy3);//Cannot perform 'get' on a proxy that has been revoked
console.log("------------------------------------")
function toUint32(value) {
    return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}
function isArrayIndex(key) {
    let numericKey = toUint32(key);
    return String(numericKey) == key && numericKey < (Math.pow(2, 32) - 1);
}
class MyArray {
    constructor(length=0) {
        this.length = length;
        return new Proxy(this, {
            set(trapTarget, key, value) {
                let currentLength = Reflect.get(trapTarget, "length");
// the special case
                if (isArrayIndex(key)) {
                    let numericKey = Number(key);
                    if (numericKey >= currentLength) {
                        Reflect.set(trapTarget, "length", numericKey + 1);
                    }
                } else if (key === "length") {
                    if (value < currentLength) {
                        for (let index = currentLength - 1; index >= value;
                            index--) {
                                Reflect.deleteProperty(trapTarget, index);
                            }
                        }
                    }
// always do this regardless of key type
                return Reflect.set(trapTarget, key, value);
            }
        });
    }
}
let colors = new MyArray(3);
console.log(colors instanceof MyArray); // true
console.log(colors.length); // 3
colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";
colors[3] = "black";
console.log(colors.length); // 4
colors.length = 2;
console.log(colors.length); // 2
console.log(colors[3]); // undefined
console.log(colors[2]); // undefined
console.log(colors[1]); // "green"
console.log(colors[0]);

console.log("------------------------------------")
function NoSuchProperty() {
// empty
}
NoSuchProperty.prototype = new Proxy({}, {
    get(trapTarget, key, receiver) {
        throw new ReferenceError(`${key} doesn't exist`);
    }
});
class Square extends NoSuchProperty {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}
let shape = new Square(2, 6);
let area1 = shape.length * shape.width;
console.log(area1); // 12
let area2 = shape.getArea();
console.log(area2); // 12
// throws an error because "wdth" doesn't exist
//let area3width = shape.wdth;
