const { defineConfig } = require("@rspack/cli");
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin-2");
const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");

// Single config.
// module.exports = [
// 	defineConfig({
// 		context: __dirname,
// 		entry: {
// 			main: {
// 				import: ["./index.js"]
// 				// runtime: false
// 				// asyncChunks: false
// 				// chunkLoading: "jsonp"
// 				// layer: "foo"
// 			}
// 			// worker: "./worker.js"
// 		},
// 		output: {
// 			workerPublicPath: "/",
// 			// workerChunkLoading: "import",
// 			clean: true,
// 			// chunkFormat: "module",
// 			path: path.resolve(__dirname, "dist"),
// 			// module: true,
// 			// chunkLoading: "import",
// 			// library: {
// 			// 	type: "module"
// 			// },
//
// 			// asyncChunks: true,
// 			//    scriptType: "module",
// 			filename: "[name].js"
// 			// chunkLoading: "import"
// 			// chunkFormat: "module",
// 			// enabledChunkLoadingTypes: ["import", "jsonp"]
// 		},
// 		experiments: {
// 			// outputModule: true,
// 			topLevelAwait: true
// 			// layers: true
// 		},
// 		target: "web",
// 		mode: "development",
// 		optimization: {
// 			// concatenateModules: true,
// 			chunkIds: "named"
// 			// splitChunks: {
// 			// 	cacheGroups: {
// 			// 		vendor: {
// 			// 			test: /node_modules/,
// 			// 			chunks: "all",
// 			// 			name: "vendor",
// 			// 			priority: 10,
// 			// 			enforce: true
// 			// 		}
// 			// 	}
// 			// }
// 		},
// 		plugins: [
// 			new HtmlWebpackPlugin({
// 				template: "./index.html",
// 				scriptLoading: "module",
// 				chunks: ["main"]
// 			})
// 		]
// 	})
// 	// defineConfig({
// 	// 	context: __dirname,
// 	// 	// entry: {
// 	// 	// 	main: "x-startup-authoring-index"
// 	// 	// },
// 	// 	entry: {
// 	// 		"x-startup-authoring-index": {
// 	// 			import: "./worker.js"
// 	// 			// dependOn: "main"
// 	// 		}
// 	// 	},
// 	// 	output: {
// 	// 		workerPublicPath: "/",
// 	// 		workerChunkLoading: "import",
// 	// 		clean: true,
// 	// 		path: path.resolve(__dirname, "dist"),
// 	// 		module: true
// 	// 		// filename: "worker.bundle.js"
// 	// 	},
// 	// 	experiments: {
// 	// 		outputModule: true
// 	// 	},
// 	// 	target: "webworker",
// 	// 	mode: "development"
// 	// 	// plugins: [
// 	// 	// 	new HtmlWebpackPlugin({
// 	// 	// 		template: "./index.html"
// 	// 	// 	})
// 	// 	// ]
// 	// })
// ]

// Multi-config.
module.exports = (env, options) => {
	return [
		defineConfig({
			context: __dirname,
			entry: {
				main: {
					import: ["./index.js"]
					// runtime: "authoring"
					// asyncChunks: false
					// chunkLoading: "jsonp"
					// layer: "foo"
				}
				// worker: "./worker.js"
			},
			output: {
				workerPublicPath: "/",
				// workerChunkLoading: "import",
				clean: true,
				// chunkFormat: "module",
				path: path.resolve(__dirname, "dist"),
				module: true,
				// chunkLoading: "import",
				// library: {
				// 	type: "module"
				// },

				// asyncChunks: true,
				// scriptType: "module",

				// filename: "static/[name].[contenthash].js",
				filename: (...args) => {
					// console.log(args);
					return "static/[name].[contenthash].js";
				},
				chunkFilename: "static/[name].[contenthash].js"
				// chunkLoading: "import"
				// chunkFormat: "module",
				// enabledChunkLoadingTypes: ["import", "jsonp"]
			},
			experiments: {
				outputModule: true
				// topLevelAwait: true
				// layers: true
			},
			target: "web",
			mode: "development",
			optimization: {
				// concatenateModules: true,
				chunkIds: "named",
				runtimeChunk: "single",
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
				// new HtmlWebpackPlugin({
				// 	template: "./index.html",
				// 	// scriptLoading: "module",
				// 	chunks: ["main"],
				// 	excludeChunks: ["vendor"]
				// })
				// process.env.RSDOCTOR &&
				// 	new RsdoctorRspackPlugin({
				// 		features: ["bundle"]
				// 	})
			]
		})
		// defineConfig({
		// 	name: "authoring-worker",
		// 	context: __dirname,
		// 	entry: {
		// 		"x-startup-authoring-index": "./worker.js"
		// 	},
		// 	output: {
		// 		path: path.resolve(__dirname, "dist/static"),
		// 		filename: "[name].js",
		// 		workerChunkLoading: "import",
		// 		clean: true,
		// 		module: true,
		// 		chunkLoading: "import",
		// 		chunkFormat: "module"
		// 	},
		// 	plugins: [
		// 		process.env.RSDOCTOR &&
		// 			new RsdoctorRspackPlugin({
		// 				features: ["bundle"]
		// 			})
		// 	],
		// 	experiments: {
		// 		outputModule: true,
		// 		topLevelAwait: true
		// 	},
		// 	target: ["webworker"],
		// 	mode: "development",
		//
		// 	optimization: {
		// 		chunkIds: "named",
		// 		splitChunks: {
		// 			cacheGroups: {
		// 				vendor: {
		// 					test: /node_modules/,
		// 					chunks: "all",
		// 					name: "vendor",
		// 					priority: 10,
		// 					enforce: true
		// 				}
		// 			}
		// 		}
		// 	}
		// })
	];
};

// module.exports = (env, options) => ({
// 	context: __dirname,
// 	entry: {
// 		main: {
// 			import: ["./index.js"]
// 			// runtime: false
// 			// asyncChunks: false
// 			// chunkLoading: "jsonp"
// 			// layer: "foo"
// 		}
// 		// worker: "./worker.js"
// 	},
// 	output: {
// 		workerPublicPath: "/",
// 		// workerChunkLoading: "import",
// 		clean: true,
// 		// chunkFormat: "module",
// 		path: path.resolve(__dirname, "dist"),
// 		// module: true,
// 		// chunkLoading: "import",
// 		// library: {
// 		// 	type: "module"
// 		// },
//
// 		// asyncChunks: true,
// 		//    scriptType: "module",
// 		filename: "[name].js"
// 		// chunkLoading: "import"
// 		// chunkFormat: "module",
// 		// enabledChunkLoadingTypes: ["import", "jsonp"]
// 	},
// 	experiments: {
// 		// outputModule: true,
// 		// topLevelAwait: true
// 		// layers: true
// 	},
// 	target: "web",
// 	mode: "development",
// 	optimization: {
// 		// concatenateModules: true,
// 		chunkIds: "named"
// 		// splitChunks: {
// 		// 	cacheGroups: {
// 		// 		vendor: {
// 		// 			test: /node_modules/,
// 		// 			chunks: "all",
// 		// 			name: "vendor",
// 		// 			priority: 10,
// 		// 			enforce: true
// 		// 		}
// 		// 	}
// 		// }
// 	},
// 	plugins: [
// 		new HtmlWebpackPlugin({
// 			template: "./index.html",
// 			scriptLoading: "module",
// 			chunks: ["main"]
// 		})
// 	]
// });
