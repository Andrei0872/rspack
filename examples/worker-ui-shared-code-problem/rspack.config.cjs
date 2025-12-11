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
			// clean: true,
			path: path.resolve(__dirname, "dist"),
			module: true
		},
		experiments: {
			outputModule: true
		},
		// target: ["web", "webworker"],
		target: ["web"],
		mode: "development",
		optimization: {
			chunkIds: "named",
			// runtimeChunk: "single",
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
	// 	entry: {
	// 		worker1: {
	// 			import: "./worker.js",
	// 			layer: "worker1"
	// 		},
	// 		worker2: {
	// 			import: "./worker2.js"
	// 			// layer: "worker2"
	// 		}
	// 	},
	// 	optimization: {
	// 		chunkIds: "named",
	// 		splitChunks: {
	// 			cacheGroups: {
	// 				commons: {
	// 					chunks: "all",
	// 					minChunks: 2,
	// 					minSize: 0,
	// 					maxInitialRequests: 5,
	// 					test: /utility/
	// 				}
	// 			}
	// 		}
	// 	},
	// 	output: {
	// 		workerPublicPath: "/worker",
	// 		workerChunkLoading: "import",
	// 		// clean: true,
	// 		path: path.resolve(__dirname, "dist"),
	// 		module: true
	// 	},
	// 	experiments: {
	// 		outputModule: true,
	// 		layers: true
	// 	},
	// 	target: "webworker",
	// 	mode: "development"
	// })
];
