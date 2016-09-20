"use strict";
let items = Array.of(1, 2);
console.log(items.length); // 2
console.log(items[0]); // 1
console.log(items[1]); // 2


function doSomething() {
    //Convert arrayLike to an array.
    var args = Array.from(arguments);
    console.log(args)
// use args
}
doSomething(1,"x",[1,2,3],{'xx':'xx'})

let numbers = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
};
let numbers2 = Array.from(numbers, (value) => value + 1);
for(var x of numbers){
    console.log(x)
}
console.log(numbers2);

let numbers3 = [25, 30, 35, 40, 45];
console.log(numbers3.find(n => n > 33)); // 35
console.log(numbers3.findIndex(n => n > 33)); // 2

let numbers4 = [1, 2, 3, 4];
numbers4.fill(1);
console.log(numbers4.toString());
numbers4 = [1, 2, 3, 4];
numbers4.fill(1, 2);
console.log(numbers4.toString());

numbers4.fill(0, 1, 3);
console.log(numbers4.toString());

numbers4 = [1, 2, 3, 4];
// paste values into array starting at index 2
// copy values from array starting at index 0
numbers4.copyWithin(2, 0);
console.log(numbers4.toString());
console.log("------------------------------------")
let buffer = new ArrayBuffer(10),
view1 = new DataView(buffer), // cover all bytes
view2 = new DataView(buffer, 5, 2); // cover bytes 5 and 6
console.log(view1.buffer === buffer); // true
console.log(view2.buffer === buffer); // true
console.log(view1.byteOffset); // 0
console.log(view2.byteOffset); // 5
console.log(view1.byteLength); // 10
console.log(view2.byteLength); // 2

view1.setInt8(0, 5);
view1.setInt8(1, -1);
console.log(view1.getInt8(0)); // 5
console.log(view1.getInt16(0));
console.log(view1.getInt8(1)); // -1
