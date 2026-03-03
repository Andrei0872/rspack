// import { X } from "x";
//
// console.log("[middle]:", X);

import("./lib.js").then(m => m.libFn());
import("./lib2.js").then(m => m.lib2Fn());

export const middle = () => 1;
