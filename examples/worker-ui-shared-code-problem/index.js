import("./lib").then(console.log);
import { name } from "./utility1.js";

console.log(name);

const w = new Worker(
	/* webpackChunkName: "x-startup-authoring-index" */ new URL(
		"./worker.js",
		import.meta.url
	),
	{ name: "x-startup-authoring-index", type: "module" }
);
