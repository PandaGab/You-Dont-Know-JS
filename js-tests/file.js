console.log("Hello !")
var names = [ "Frank", "Kyle", "Peter", "Susan" ];
console.log(42, "->", typeof 42);                  // "number"
console.log("abc", "->",typeof "abc");               // "string"
console.log(true, "->",typeof true);                // "boolean"
console.log(undefined, "->",typeof undefined);           // "undefined"
console.log(null, "->",typeof null);                // "object" -- oops, bug!
console.log({ "a": 1 }, "->",typeof { "a": 1 });          // "object"
console.log([1,2,3], "->",typeof [1,2,3]);             // "object"
console.log(function hello(){}, "->",typeof function hello(){});  // "function"

var b = {"a": 42}
console.log(b.a)
