function codePointLength(text) {
    let result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
console.log(codePointLength("abc")); // 3
console.log(codePointLength("𠮷bc")); // 3

let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true
console.log(msg.startsWith("o")); // false
console.log(msg.startsWith("o", 4)); // true
console.log(msg.endsWith("!")); // true
console.log(msg.endsWith("world!")); // true
console.log(msg.endsWith("o", 8)); // true
console.log(msg.includes("o")); // true
console.log(msg.includes("x")); // false
console.log(msg.includes("o", 8)); // false

console.log("x".repeat(3)); // "xxx"
console.log("hello".repeat(2)); // "hellohello"
console.log("abc".repeat(4)); // "abcabcabcabc"


var message = "Multiline \
string \
string";
console.log(message);//Multiline string string

let count = 10,
    price = 0.2512,
    name = "Nicholas",
    myNicholas = "my Nicholas";

var message2 = `Multiline,${name}
Multiline string
Multiline string
${count} items cost $${(count * price).toFixed(2)}.`;
console.log(message2);
/*
Multiline,Nicholas
Multiline string
Multiline string
10 items cost $2.51.
*/

function passthru(literals, ...substitutions) {
    console.log(literals);//[ '', ' items cost $', '.' ]
    console.log(substitutions);//[ 10, '2.51' ]
    let result = "";
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    result += literals[literals.length - 1];
    return result+ " --passthrued";
}
let count2 = 10,
    price2 = 0.2512;
var message3 =passthru`${count2} items cost $${(count2 * price2).toFixed(2)}.`
console.log(message3);//10 items cost $2.51. --passthrued
