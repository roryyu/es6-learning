let fs = require("fs");
function readFile(filename) {
    return new Promise(function(resolve, reject) {
        // trigger the asynchronous operation
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) {
            // check for errors
            if (err) {
                reject(err);
                return;
            }
            // the read succeeded
            resolve(contents);
        });
    });
}
function run(file){
    let promise = readFile(file);
    promise.then(function(contents) {
    // fulfillment
        console.log("contents"+1);
    }, function(err) {
    // rejection
        console.error(err.message+1);
    });
    promise.then(function(contents) {
    // fulfillment
        console.log("contents"+2);
    });
    promise.then(null, function(err) {
    // rejection
        console.error(err.message+2);
    });
    promise.catch(function(err) {
    // rejection
        console.error(err.message+3);
    });
}
run('test.json');
run('test1.json');


process.on("unhandledRejection", function(reason, promise) {
    console.log(reason.message); // "Explosion!"
    console.log("unhandledRejection"); // true
});
process.on("rejectionHandled", function(promise) {
    console.log("rejectionHandled"); // true
});

let p1 = new Promise(function(resolve, reject) {
    resolve(42);
});
p1.then(function(value) {
    console.log("p1:"+value); // "42"
    return value + 1;
}).then(function(value) {
    console.log("p1-ex:"+value); // "43"
});


let p3 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(42);
    },Math.random()*1000)

});
let p4 = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(55);
    },Math.random()*1000)
});
p3.then(function(value) {
    console.log("p3:"+value);
    return p4;
}).then(function(value) {
    console.log("p4:"+value);
});

let p7 = new Promise(function(resolve, reject) {
resolve(42);
});
let p8 = new Promise(function(resolve, reject) {
resolve(43);
});
let p9 = new Promise(function(resolve, reject) {
resolve(44);
});
let p10 = Promise.all([p7, p8, p9]);
p10.then(function(value) {
console.log(Array.isArray(value)); // true
console.log("p7:"+value[0]); // 42
console.log("p8:"+value[1]); // 43
console.log("p9:"+value[2]); // 44
});

let p11 = Promise.race([p3,p4]);
p11.then(function(value) {
    console.log("race:"+value); // 42
});

class MyPromise extends Promise {
    // use default constructor
    success(resolve, reject) {
        return this.then(resolve, reject);
    }
    failure(reject) {
        return this.catch(reject);
    }
}
let promise2 = new MyPromise(function(resolve, reject) {
    resolve(42);
});
promise2.success(function(value) {
    console.log("MyPromise:"+value); // 42
}).failure(function(value) {
    console.log(value);
});
