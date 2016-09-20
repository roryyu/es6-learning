"use strict";

//TODO: constants
const PI = 3.141593
console.log(PI)


//TODO: Scope
var fn=[]
for(var i=0;i<5;i++){
  fn[i]=function(){
    console.log(i);
  }
}
fn[0]();

var fn2=[]
for(var i=0;i<5;i++){
  let j=i;
  fn2[i]=function(){
    console.log(j);
  }
}
fn2[0]();

var fn3=[]
for(let i=0;i<5;i++){
  fn3[i]=function(){
    console.log(i);
  }
}
fn3[0]();

function foo () { return 1 }
console.log(foo())
{
   function foo () { return 2 }
   console.log(foo())
}
console.log(foo())

//TODO: Arrow Functions
let evens=[1,2,3,4,5,6,7,8,9,10,11]
let odds  = evens.map(v => v + 1)
console.log(odds)
console.log(evens.map(v => ({ even: v, odd: v + 1 })))
console.log(evens.map((v, i) => v + i))
let fives=[];
evens.forEach(v => { if (v % 5 === 0) fives.push(v) })
console.log(fives)


function Apple(treename){
  this.treename=treename;
  this.nums=[1,2,3,4,5,6];
  this.fives=[];
}
Apple.prototype.getTreeName=function(){
  return this.treename;
}
Apple.prototype.setTreeName=function(treename){
  this.treename=treename;
}
Apple.prototype.getTwo=function(){
  this.nums.forEach((v) => { if (v % 2 === 0) this.fives.push(v) })
  console.log(this.fives)
}
Apple.location='Shanghai';
var apple=new Apple('Wu');
console.log(apple);
apple.getTwo();

//TODO: Extended Parameter Handling
/*function f (x, y = 7, z = 42) {
  return x + y + z
}
console.log(f(1))//no support*/
function f (x, y, ...a) { return console.log(a) }
f(1, 2, "hello", true, 7)
var other=["hello", true, 7]
f(1, 2, ...other)
f(1,2,...["hello", true, 7])

//TODO: Template Literals
var customer = { name: "Foo" }
var message = `Hello ${customer.name}`
console.log(message)
function quux (strings, ...values) {
  console.log(strings,values)
  console.log(strings[0])
  console.log(strings[1])
  console.log(strings.raw[0])
  console.log(strings.raw[1])
  console.log(values[0])
}
quux `foo\n${ 42 }bar`

//TODO: Enhanced Object Properties
var x="xx",y="yy"
function fun2(){
  return 'bar';
}

var obj = {
  x,
  y,
  [ "prop_" + fun2() ]: 42,
  fun3(a,b){
    var x={};
    x[a]=b;
    return x;
  }
 }
console.log(obj)
console.log(obj.fun3('x','y'))

//TODO: Destructuring Assignment
/*var list = [ 1, 2, 3 ]
var [ a, b ] = list
[ b, a ] = [ a, b ]
console.log(a)
console.log(b)//no support*/

//TODO: Class
class Shape {
  constructor (id, x, y) {
    this.id = id
    this.move(x, y)
  }
  move (x, y) {
    this.x = x
    this.y = y
  }
  toString () {
     return `Shape(${this.id})`
  }
}
var s=new Shape('001',12,20);
console.log(s)
console.log(s.toString())

class Circle extends Shape {
  constructor (id, x, y, radius) {
    super(id, x, y)
    this.radius = radius
  }
   static defaultCircle () { return new Circle("default", 0, 0, 100) }
}
var c=new Circle('002',12,20,.5*PI);
console.log(c)
console.log(Circle.defaultCircle())

class Rectangle extends Shape {
  constructor (id, x, y,width, height) {
    super(id, x, y)
    this._width  = width
    this._height = height
  }
  set width (width) {
    this._width = width
  }
  get width () {
    return this._width
  }
  set height (height) {
    this._height = height
  }
  get height () {
     return this._height
  }
  get area () {
      return this._width * this._height
  }
}
let r=new Rectangle('003',12,20,40,100)
console.log(r)
console.log(r.width,r.height,r.area)

//TODO: Symbol Type
const fsym = Symbol("yyy")
const fsym2 = Symbol("zzz")
r[fsym]="xxxx";
r[fsym2]="zzzz";
console.log(Object.keys(r)) //
console.log(Object.getOwnPropertyNames(r)) //
console.log(Object.getOwnPropertySymbols(r))
console.log(r[fsym])//hide property
console.log(r[Symbol("yyy")])//undefined
for(let p in r){
  console.log(p,r[p])
}
//TODO: Iterator & For-Of Operator
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1
    return {
      next () {
        let tmp = pre
        pre = cur
        cur += tmp;
        return { done: false, value: cur }
      }
    }
  }
}
for (let n of fibonacci) {
  if (n > 100) break
  console.log(n)
}
console.log(fibonacci[Symbol.iterator]())
console.log(fibonacci[Symbol.iterator]().next())

//TODO: Generators
function* gen() {
    
  yield 1;
  yield 2;
  yield 3;
}
var g = gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());

function* foo(){
  var index = 0;
  while (index <= 2)
    yield index++;
  return {index:index}
}
var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* range (start, end, step) {
  while (start < end) {
    yield start
    start += step
  }
}
for (let i of range(0, 10, 2)) {
  console.log(i)
}

let fibonacci2 = {
   *[Symbol.iterator]() {
      let pre = 0, cur = 1
      for (;;) {
          var tmp = pre;
          pre = cur;
          cur += tmp;
          yield cur
       }
   }
}
for (let n of fibonacci2) {
  if (n > 100) break
  console.log(n)
}


//TODO: Map/Set
let ss = new Set()
ss.add('hello').add('world')
console.log(ss.size)
for(let skey of ss.values()){
  console.log(skey)
}

let m = new Map()
m.set("hello", 42)
m.set(ss, 34)
console.log(m.size)
for(let keyvalue of m.entries()){
    console.log({key:keyvalue[0],value:keyvalue[1]})
}
let isMarked  = new WeakSet()
let attachedData = new WeakMap()
class Node{
  constructor(id){
    this.id=id
  }
 mark(){ isMarked.add(this) }
 unmark(){ isMarked.delete(this) }
 marked() { return isMarked.has(this) }
 set data(data) { attachedData.set(this, data) }
 get data() { return attachedData.get(this) }
}
let node=new Node('123');
node.mark()
node.data="foo"
console.log(node)
console.log( isMarked.has(node) )
console.log( attachedData.has(node) )
node.unmark()
console.log( isMarked.has(node) )
console.log( attachedData.has(node) )
console.log(attachedData.get(node))

//TODO: New Built-In Methods
var dst  = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dst, src1, src2)
src1[foo]=456
console.log(dst)
console.log([ 1, 3, 4, 2 ].find(x => x > 3))

console.log("foo".repeat(3))
console.log("hello".startsWith("ello", 1)) // true
console.log("hello".endsWith("hell", 4))  // true
console.log("hello".includes("ell"))  // true
console.log("hello".includes("ell", 1))  // true
console.log("hello".includes("ell", 2))  // false
console.log(Number.isNaN(42))
console.log(Number.isFinite(123))
console.log(Number.isSafeInteger(42))
console.log(Number.isSafeInteger(9007199254740992))
console.log(Number.EPSILON)
console.log(Math.trunc(42.7))
console.log(Math.trunc( 0.1))
console.log(Math.sign(7))  // 1
console.log(Math.sign(0))  // 0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN

//TODO: Promise
function msgAfterTimeout (msg, who, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout) }
  )
}
msgAfterTimeout("", "Foo", 100)
.then((msg) => msgAfterTimeout(msg, "Bar", 200) )
.then((msg) => { console.log(`done after 300ms:${msg}`) })

Promise.all([
  msgAfterTimeout("Hello", "Foo", 100),
  msgAfterTimeout("World", "Goo", 300),
  msgAfterTimeout("Promise", "Zoo", 200),
]).then((data)=>{
  console.log(data)
})
//Internationalization & Localization
var i10nEN = new Intl.DateTimeFormat("en-US")
console.log(i10nEN.format(new Date("2015-01-02")))
