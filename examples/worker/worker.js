console.log("Hello from worker");
import { name } from "./utility2.js";
import { name as name1 } from "./utility1.js";
// import { name as fooName } from "./foo.js";

console.log(name);
console.log(name1);
// console.log(fooName);
//
// import("./worker-dep.js").then(console.warn);
import("./lib").then(console.log);
