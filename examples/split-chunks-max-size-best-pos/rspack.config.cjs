const path = require("node:path");
const { rspack, MultiCompiler, Compiler } = require(
	path.resolve(__dirname, "../../packages/rspack")
);
const { defineConfig } = require("@rspack/cli");
const { RsdoctorRspackPlugin } = require("@rsdoctor/rspack-plugin");
// const { RsdoctorRspackPlugin } = require("rsdoctor1.2");

const cfg1 = defineConfig({
	context: __dirname,
	entry: {
		main: "./index.js"
	},
	output: {
		clean: true,
		module: true,
		chunkLoading: "import",

		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	optimization: {
		// minimize: true,
		// concatenateModules: true,
		splitChunks: {
			cacheGroups: {
				default: false,
				defaultVendors: false,
				vendor: {
					chunks: "async",
					minChunks: 1,
					maxAsyncSize: 100,
					minSize: 67
				}
			}
		}
		// splitChunks: false
	},
	experiments: {
		outputModule: true
	},
	devtool: "source-map"
});

module.exports = cfg1;
