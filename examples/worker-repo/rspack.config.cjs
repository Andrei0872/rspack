const { defineConfig } = require("@rspack/cli");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin-2");

module.exports = [
	defineConfig({
		context: __dirname,
		entry: {
			main: "./index.js"
			// worker: "./worker.js"
		},
		output: {
			workerPublicPath: "/",
			workerChunkLoading: "import",
			clean: true,
			chunkFormat: "module",
			path: path.resolve(__dirname, "dist"),
			module: true,
			chunkLoading: "import",
			// library: {
			// 	type: "module"
			// },

			// filename: "[name].js",
			chunkLoading: "jsonp",
			// chunkFormat: "module",
			enabledChunkLoadingTypes: ["import", "jsonp"]
		},
		// experiments: {
		// 	outputModule: true
		// },
		target: "web",
		mode: "development",
		optimization: {
			// concatenateModules: true,
			chunkIds: "named",
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /node_modules/,
						chunks: "all",
						name: "vendor",
						priority: 10,
						enforce: true
					}
				}
			}
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "./index.html",
				scriptLoading: "module",
				chunks: ["main"]
			})
		]
	})
	// defineConfig({
	// 	context: __dirname,
	// 	// entry: {
	// 	// 	main: "x-startup-authoring-index"
	// 	// },
	// 	entry: {
	// 		"x-startup-authoring-index": {
	// 			import: "./worker.js"
	// 			// dependOn: "main"
	// 		}
	// 	},
	// 	output: {
	// 		workerPublicPath: "/",
	// 		workerChunkLoading: "import",
	// 		clean: true,
	// 		path: path.resolve(__dirname, "dist"),
	// 		module: true
	// 		// filename: "worker.bundle.js"
	// 	},
	// 	experiments: {
	// 		outputModule: true
	// 	},
	// 	target: "webworker",
	// 	mode: "development"
	// 	// plugins: [
	// 	// 	new HtmlWebpackPlugin({
	// 	// 		template: "./index.html"
	// 	// 	})
	// 	// ]
	// })
];
