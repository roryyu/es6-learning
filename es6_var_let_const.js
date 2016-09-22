"use strict";
let value1 = "red";
function getV1(){
    //console.log(value1);//ReferenceError: value1 is not defined
    let value1 = "yellow";
    return value1;
}
console.log(getV1());//yellow
console.log(value1)//red


let value4 = "red";
function getV4(){
    //value4 = "black";//ReferenceError: value4 is not defined
    let value4 = "yellow";
    return value4;
}
getV4();
function getV5(){
    //value5 = "black";//ReferenceError: value5 is not defined
    let value5 = "yellow";
    return value5;
}
getV5();
console.log("-----------------------------------")
let value7="red";
function getV7(condition) {
    console.log(value7);//red
    if (condition) {
        let value7 = "blue";
        return value7;
    } else {
        console.log(value7);//red
    }
    return value7;
}
console.log(getV7(0))//red
console.log(getV7(1))//blue
console.log(value7)//red
console.log("-----------------------------------")
let value8="red";
function getV8(condition) {
    //console.log(value8);//ReferenceError: value8 is not defined
    if (condition) {
        let value8 = "blue";
        return value8;
    } else {
        //console.log(value8);//ReferenceError: value8 is not defined
    }
    let value8 = "yellow";
    return value8;
}
console.log(getV8(0))//yellow
console.log(getV8(1))//blue
console.log(value8)//red
console.log("--------------xxx------------------")
function getV9(){
    var v9="yellow";
    return v9;
    //let v9="red";//SyntaxError: Identifier 'v9' has already been declared
}
console.log(getV9());
function getV10(){
    let v10="yellow";
    return v10;
    //var v10="red";//SyntaxError: Identifier 'v10' has already been declared
}
console.log(getV10());

function getV9_2(){
    let v9_2="yellow";
    return v9_2;
    //let v9_2="red";//SyntaxError: Identifier 'v9' has already been declared
}
console.log(getV9_2());
function getV10_2(){
    var v10_2="yellow";
    return v10_2;
    var v10_2="red";
}
console.log(getV10_2());

console.log("-----------------------------------")
//console.log(v11);//ReferenceError: v11 is not defined
if(1){
    //var v11 = "red";//SyntaxError: Identifier 'v11' has already been declared
    //console.log(v11);//ReferenceError: v11 is not defined
    let v11 = "yellow";
    //var v11 = "red";//SyntaxError: Identifier 'v11' has already been declared
    console.log(v11);//yellow
}
//console.log(v11);//ReferenceError: v11 is not defined

console.log(v12);//undefined
if(1){
    console.log(v12);//undefined
    var v12 ="red";
    console.log(v12);//red
}
console.log(v12);//red

console.log("-----------------------------------")
console.log(v13);//undefined
var v13="red"
if(1){
    //var v13 = "black";//SyntaxError: Identifier 'v13' has already been declared
    //console.log(v13);//ReferenceError: v13 is not defined
    let v13 = "yellow";
    //var v13 = "red";//SyntaxError: Identifier 'v13' has already been declared
    console.log(v13);//yellow

}
console.log(v13);//red

console.log(v14);//undefined
if(1){
    //var v14 = "black";//SyntaxError: Identifier 'v14' has already been declared
    //console.log(v14);//ReferenceError: v14 is not defined
    let v14 = "yellow";
    //var v14 = "red";//SyntaxError: Identifier 'v14' has already been declared
    console.log(v14);//yellow
}
var v14="red"
console.log(v14);//red


console.log("-----------------------------------")
var funcs = [];
for (let k = 0; k < 10; k++) {
    console.log(k);//输出0,1,2,3,4,5,6,7,8,9
    funcs.push(function() {
        console.log(k);
    });
}
//console.log(k)//ReferenceError: k is not defined
funcs.forEach(function(func) {
    func(); //输出0,1,2,3,4,5,6,7,8,9
})

var funcs2 = [];
for (var m = 0; m < 10; m++) {
    console.log(m);//输出0,1,2,3,4,5,6,7,8,9
    funcs2.push(function() {
        console.log(m);
    });
}
console.log(m)//10
funcs2.forEach(function(func) {
    func(); //全部是10
});




console.log("-----------------------------------")
//const minItems;//Missing initializer in const declaration
const maxItems = 30;
//maxItems=20;//Assignment to constant variable.
console.log(maxItems)

const person = {
    name: "Nicholas"
};
person.name = "Greg";
person.address = "Shanghai";
//person={ name:'Rory'};//Assignment to constant variable.
console.log(person);//{ name: 'Greg', address: 'Shanghai' }

const personlist=['Mary','Peter'];
personlist.push('Bobo');
//personlist = ["new person"];//Assignment to constant variable.
console.log(personlist)



//console.log(c1)//ReferenceError: c1 is not defined
const c1="red";
console.log(c1)//red
if(1){
    //console.log(c1)//ReferenceError: c1 is not defined
    const c1="yellow";
    console.log(c1)//yellow
}
console.log(c1)//red

let c2="red";
if(1){
    //console.log(c2)//ReferenceError: c2 is not defined
    const c2="yellow"
    console.log(c2)
}
console.log(c2)//red

if(1){
    let c3 = "red";
    //const c3="yellow";//SyntaxError: Identifier 'c2' has already been declared
}
if(1){
    const c4="yellow";
    //let c4 = "red";//SyntaxError: Identifier 'c2' has already been declared
}


var funcs4 = [],
    object = {
        a: true,
        b: true,
        c: true
    };
for (const key in object) {
    funcs4.push(function() {
        console.log('func4():' +key);
    });
}
funcs4.forEach(function(func) {
    func(); // "a", "b", "c"
});
