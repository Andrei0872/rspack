# Example 

Chunk splitting config:

```ts
splitChunks: {
    cacheGroups: {
        default: false,
        defaultVendors: false,
        vendor: {
            chunks: "async",
            minSize: 0,
            minChunks: 2
        }
    }
},
```

`x` is duplicated across chunks: `lib` and `lib2`. As a result, in order to avoid duplication (and due to the above config), `x` will be extracted in its own chunk so that one of `lib` and `lib2` can use a cached version.

Another way this duplication problem could be solved (depending on the context), is to include `x` in a parent/ancestor chunk of `lib` and `lib2`. For instance, try to statically import `x`:

```ts
import { X } from "x";

console.log("[index]:", X);
```

...in either `middle.js`(async parent chunk) or `main.js` (initial ancestor chunk).

Then, by running

```bash
rm -rf examples/split-chunks-basic/dist && ./packages/rspack-cli/bin/rspack.js build -c examples/split-chunks-basic/rspack.config.cjs
```

...`x` should be hoisted in the parent/ancestor chunk (`middle` or `main`).

---

The **takeaway** is: modules imported across async chunks (such as `lib` and `lib2`) can be hoisted (i.e. cached from) their ancestor chunks.
