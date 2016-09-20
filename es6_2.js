"use strict";




console.log("-----------------------------------")

function getValue(condition) {
    //console.log(value)//value is not defined

    if (condition) {
        //console.log(value);//value is not defined
        let value = "blue";
        var value2 = "red";
        return value;
    } else {
        //console.log(value);//value is not defined
        console.log(value2); //undefined
        ///return null;
    }
    //var value = "white";//Identifier 'value2' has already been declared
    //let value2 ="white";//Identifier 'value2' has already been declared
    console.log(value2);
    let value = "black";
    value2 = "white";
    console.log(value2);
    //console.log(value);//value is not defined
    return value;
}
console.log(getValue(0))//null
console.log(getValue(1))//blue

console.log("-----------------------------------")
var count = 30;
if (1) {
    //var count = 30;//Identifier 'count' has already been declared
    //console.log(typeof count);//already been declared && is not defined
    //console.log(typeof count2);//already been declared && is not defined
    console.log(typeof count3);
    let count = 40;
    count = 999;
    const count2 = 50;
    var count3 = 60;
    console.log(count)
    console.log(count2)
        // more code
}
console.log(count)
    //console.log(count2)//is not defined
console.log("-----------------------------------")
//const minItems;//Missing initializer in const declaration
const maxItems = 30;
//maxItems=20;//Assignment to constant variable.
console.log(maxItems)


const person = {
    name: "Nicholas"
};
person.name = "Greg";
//person={ name:'Jake'};//Assignment to constant variable.
console.log(person);

for (var i = 0; i < 10; i++) {
    getValue(i);
}
// i is still accessible here
console.log(i);

for (let j = 0; j < 10; j++) {
    getValue(j);
}
// i is not accessible here - throws an error
//console.log(j);//is not defined

var funcs = [];
for (let k = 0; k < 10; k++) {
    funcs.push(function() {
        console.log('func():' + k);
    });
}
funcs.forEach(function(func) {
    func(); // outputs 0, then 1, then 2, up to 9
})

var funcs2 = [];
for (var m = 0; m < 10; m++) {
    funcs2.push(function() {
        console.log('func2():' + m);
    });
}
funcs2.forEach(function(func) {
    func(); // outputs the number "10" ten times
});

var funcs3 = [],
    object = {
        a: true,
        b: true,
        c: true
    };
for (let key in object) {
    funcs3.push(function() {
        console.log('func3():' + key);
    });
}
funcs3.forEach(function(func) {
    func(); // outputs "a", then "b", then "c"
});

var funcs4 = [],
    object2 = {
        a: true,
        b: true,
        c: true
    };
// doesn't cause an error
for (const key2 in object2) {
    funcs4.push(function() {
        console.log('func4():' +key2);
    });
}
funcs4.forEach(function(func) {
    func(); // outputs "a", then "b", then "c"
});

/*
var v1="v1";
console.log(v1,window.v1,window.v1===v1);//v1 v1 true
let v2="v2";
console.log(v2,window.v2,window.v2===v2);//v2 undefined false
*/
