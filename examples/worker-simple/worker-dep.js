// import { name } from "./utility2.js";

import { name } from "utility1";

console.log("worker-dep");

export function hello() {
	console.log("worker dep", name);
}
