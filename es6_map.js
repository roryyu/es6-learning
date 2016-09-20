"use strict";
/*
var map = Object.create(null),key1 = {};
map.foo = "bar";
map[5] = "foo";
map[key1] = "foo";
console.log(map)
*/
let set = new Set();//有序集合，无重复项
set.add(5);
set.add("5");
set.add("hello");
set.forEach(function(value, key, ownerSet) {
    console.log("---"+key + " " + value);
    console.log(ownerSet === set);
});
console.log(set);
console.log(set.has(5));
console.log(set.size);
set.delete(5);
console.log(set);
set.clear();
console.log(set.has("5"));
console.log(set.size);
set.add("Hello");
set.add("my");
set.add("world");
let processor = {
    output(value) {
        console.log(value);
    },
    process(dataSet) {
        dataSet.forEach(value => this.output(value));
    }
};
processor.process(set)

let set2 = new Set([1, 2, 3, 3, 3, 4, 5, 3, 4,1]),
arr = [...set2];
set2.add('XXX')
console.log(arr);
console.log("---------------------------------------------");

let set3 = new WeakSet(),
set4 = new Set(),
key = {};
// add the object to the set
set3.add(key);
set4.add(key);
console.log(set3.has(key));
console.log(set4.has(key));
set3.delete(key);
set4.delete(key);
console.log(set3.size);//undefined
console.log(set4.size);
console.log(set3.has(key));
console.log(set4.has(key));

console.log("---------------------------------------------");
let map = new Map([["name", "Nicholas"], ["age", 25]]),
key1 = {},
key2 = {};
map.set(key1, 5);
map.set(key2, 42);
map.set('key', 55);
console.log(map.get(key1)); // 5
console.log(map.get(key2)); // 42
console.log(map.get('key'));
console.log(map.get('name'));
map.delete("key");
console.log(map.size);
map.clear();
console.log(map.has(key1));
console.log(map.size);
let map2 = new WeakMap([[key1, "Hello"], [key2, 42]]);
console.log(map2.size);

console.log("---------------------------------------------");
let Person = (function() {
    let privateData = new WeakMap();
    let t={};
    function Person(name) {
        privateData.set(this, { name: name });
    }
    Person.prototype.getName = function() {
        return privateData.get(this).name;
    };
    return Person;
}());

var p=new Person('rory');
console.log(p.getName())
