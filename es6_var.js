"use strict";
console.log("--------------------------------------------")
var value = "yellow";
function varFunction(condition){
    console.log(value)//yellow
    if(condition){
        return value;
    }
    console.log(value)//yellow
    return value;
}
console.log(varFunction(0));//yellow
console.log(varFunction(1));//yellow


console.log("--------------------------------------------")
var value2 = "yellow";
function var2Function(condition){
    console.log(value2)//undefined
    if(condition){
        return value2;
    }
    console.log(value2)//undefined
    var value2 = "white";
    return value2;
}
console.log(var2Function(0));//white
console.log(var2Function(1));//undefined


console.log("--------------------------------------------")
var value3 = "yellow";
function var3Function(condition){
    console.log(value3)//undefined
    if(condition){
        var value3='red';
        return value3;
    }
    console.log(value3)//undefined
    return value3;
}
console.log(var3Function(0));//undefined
console.log(var3Function(1));//red


console.log("--------------------------------------------")
var value4 = "yellow";
function var4Function(condition){
    console.log(value4)//undefined
    if(condition){
        var value4='red';
        return value4;
    }
    console.log(value4)//undefined
    var value4 = "white";
    return value4;
}
console.log(var4Function(0));//white
console.log(var4Function(1));//red


console.log("------------------------------------------")
var value5 = "yellow";
function var5Function(condition){
    console.log(value5)//yellow
    if(condition){
        return value5;
    }
    console.log(value5)//yellow
    value5 = "white";
    return value5;
}
console.log(var5Function(0));//white
console.log(value5)//white

var value5_2 = "yellow";
function var5_2Function(condition){
    console.log(value5_2)//yellow
    if(condition){
        return value5_2;
    }
    console.log(value5_2)
    value5_2 = "white";
    return value5_2;
}
console.log(var5_2Function(1));//yellow
console.log(value5_2)//yellow


console.log("---------------------------------------------")
var value6 = "yellow";
function var6Function(condition){
    console.log(value6)//yellow
    if(condition){
        value6='red';
        return value6;
    }
    console.log(value6)//yellow
    return value6;
}
console.log(var6Function(0));//yellow
console.log(value6)//yellow

var value6_2 = "yellow";
function var6_2Function(condition){
    console.log(value6_2)//yellow
    if(condition){
        value6_2='red';
        return value6_2;
    }
    console.log(value6_2)
    return value6_2;
}
console.log(var6_2Function(1));//red
console.log(value6_2)//red


console.log("--------------------------------------------")
var value7 = "yellow";
function var7Function(condition){
    console.log(value7)//yellow
    if(condition){
        value7='red';
        return value7;
    }
    console.log(value7)//yellow
    value7='white';
    return value7;
}
console.log(var7Function(0));//white
console.log(value7);//white

var value7_2 = "yellow";
function var7_2Function(condition){
    console.log(value7_2)//yellow
    if(condition){
        value7_2='red';
        return value7_2;
    }
    console.log(value7_2)
    value7_2='white';
    return value7_2;
}
console.log(var7_2Function(1));//red
console.log(value7_2);//red


console.log("--------------------------------------------")
var value8 = "yellow";
function var8Function(condition){
    console.log(value8)//undefined
    if(condition){
        value8='red';
        return value8;
    }
    console.log(value8)//undefined
    var value8='white';
    return value8;
}
console.log(var8Function(0));//white
console.log(value8)//yellow

var value8_2 = "yellow";
function var8_2Function(condition){
    console.log(value8_2)//undefined
    if(condition){
        value8_2='red';
        return value8_2;
    }
    console.log(value8_2)
    var value8_2='white';
    return value8_2;
}
console.log(var8_2Function(1));//red
console.log(value8_2);//yellow


console.log("--------------------------------------------")
var value9 = "yellow";
function var9Function(condition){
    console.log(value9)//undefined
    if(condition){
        var value9='red';
        return value9;
    }
    console.log(value9)//undefined
    value9='white';
    return value9;
}
console.log(var9Function(0));//white
console.log(value9)//yellow

var value9_2 = "yellow";
function var9_2Function(condition){
    console.log(value9_2)//undefined
    if(condition){
        var value9_2='red';
        return value9_2;
    }
    console.log(value9_2)
    value9_2='white';
    return value9_2;
}
console.log(var9_2Function(1));//red
console.log(value9_2);//yellow
