// import("./lib").then(console.log);
import { name } from "./utility1.js";
import { fromIndex2 } from "./index2.js";

console.log(name);
fromIndex2();

// const w = new Worker(
// 	/* webpackChunkName: "x-startup-authoring-index" */ new URL(
// 		"./worker.js",
// 		import.meta.url
// 	),
// 	{ name: "x-startup-authoring-index", type: "module" }
// );

const w = new Worker("worker1.mjs", {
	type: "module"
});
console.log(w);
