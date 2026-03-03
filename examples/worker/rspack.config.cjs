const path = require("node:path");
const { rspack } = require(path.resolve(__dirname, "../../packages/rspack"));
const { defineConfig } = require("@rspack/cli");
const HtmlWebpackPlugin = require("html-webpack-plugin-2");

module.exports = [
	defineConfig({
		context: __dirname,
		entry: {
			// main: {
			// 	import: "./index.js",
			// 	dependOn: "index2"
			// },
			// index2: "./index2.js",

			main: {
				import: ["./index2.js", "./index.js"]
			}
		},
		output: {
			// workerPublicPath: "/",
			// workerChunkLoading: "import",
			// clean: true,
			path: path.resolve(__dirname, "dist")
			// module: true,

			// chunkFormat: "module",
			// chunkLoading: "import",
		},
		experiments: {
			// outputModule: true,
			// topLevelAwait: true
		},
		// target: ["web", "webworker"],
		// target: ["web"],
		target: ["webworker", "es2020"],
		mode: "development",
		// optimization: {
		// 	runtimeChunk: true,
		// 	chunkIds: "named",
		// 	// runtimeChunk: "single",
		// 	splitChunks: {
		// 		fallbackCacheGroup,
		// 		cacheGroups: {
		// 			commons: {
		// 				chunks: "all",
		// 				minChunks: 1,
		// 				minSize: 0,
		// 				maxInitialRequests: 5,
		// 				test: /utility/
		// 			}
		// 		}
		// },
		// 	}
		plugins: [
			new HtmlWebpackPlugin({
				template: "./index.html"
				// scriptLoading: "module",
				// chunks: ["main"]
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
	// 		runtimeChunk: true,
	// 		minimize: true,
	// 		minimizer: [
	// 			new rspack.SwcJsMinimizerRspackPlugin({
	// 				minimizerOptions: {
	// 					format: {
	// 						asciiOnly: true,
	// 						comments: false
	// 					}
	// 				}
	// 			})
	// 		],
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
	// 		// workerPublicPath: "/worker",
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
