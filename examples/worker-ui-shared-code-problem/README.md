# Example 

When bundling UI and worker code together, given the this split chunks config:

```ts
splitChunks: {
    cacheGroups: {
        commons: {
            chunks: "all",
            minChunks: 2,
            minSize: 0,
            maxInitialRequests: 5,
            test: /utility/
        }
    }
}
```

`utility.js` will be extracted in its own chunk because of `minChunks: 2` --  `utility.js` is imported in 3 different chunks via: `main.js`, `lib.js`, and `worker.js`.

The **problem** is that, in the browser, on the worker side `utility.js` is imported via a file fetched over the network, not directly, as it would make sense (since, practically, at runtime, the chunk splitting conditions are not met for the worker context).
