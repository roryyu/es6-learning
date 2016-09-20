"use strict";

let node = {
    type: "Identifier",
    name: "foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    },
    range: [0, 3]
};
let { type, name } = node;
console.log(type); // "Identifier"
console.log(name); // "foo"
let { type: localType, name: localName, value = true } = node;
console.log(value);
console.log(localType); // "Identifier"
console.log(localName); // "foo"
let { loc: { start },range: [startIndex]} = node;
let { loc: { start: localStart }} = node;
console.log(start);
console.log(localStart);
console.log(startIndex);

let colors = [ "red", "green", "blue" ];
let [ firstColor, secondColor ] = colors;
console.log(firstColor); // "red"
console.log(secondColor); // "green"
let [ , , thirdColor ] = colors;
console.log(thirdColor); // "blue"
let [ ...clonedColors ] = colors;
console.log(clonedColors); // "[red,green,blue]"


let a = 1,
b = 2;
[ a, b ] = [ b, a ];
console.log(a); // 2
console.log(b); //

function setCookie(name, value,
{
    secure = false,
    path = "/",
    domain = "example.com",
    expires = new Date(Date.now() + 360000000)
} = {}
) {
    console.log(name, value,secure,path,domain,expires)
};
setCookie("type", "js", {
    secure: true,
    expires: 60000
});
