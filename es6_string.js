function codePointLength(text) {
    let result = text.match(/[\s\S]/gu);
    return result ? result.length : 0;
}
console.log(codePointLength("abc")); // 3
console.log(codePointLength("𠮷bc")); // 3

let msg = "Hello world!";
console.log(msg.startsWith("Hello")); // true
console.log(msg.endsWith("!")); // true
console.log(msg.includes("o")); // true
console.log(msg.startsWith("o")); // false
console.log(msg.endsWith("world!")); // true
console.log(msg.includes("x")); // false
console.log(msg.startsWith("o", 4)); // true
console.log(msg.endsWith("o", 8)); // true
console.log(msg.includes("o", 8)); // false

console.log("x".repeat(3)); // "xxx"
console.log("hello".repeat(2)); // "hellohello"
console.log("abc".repeat(4)); // "abcabcabcabc"

function passthru(literals, ...substitutions) {
    let result = "";
    // run the loop only for the substitution count
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }
    // add the last literal
    result += literals[literals.length - 1];
    return result+ " --passthrued";
}
var message = "Multiline \
string \
string";
console.log(message);

let count = 10,
    price = 0.25,
    name = "Nicholas",
    myNicholas = "my Nicholas",
    message2 = `Multiline,${name}.
string
string
${count} items cost $${(count * price).toFixed(2)}.`,
    message3 =passthru`${count} items cost $${(count * price).toFixed(2)}.`
console.log(message2);
console.log(message3);
