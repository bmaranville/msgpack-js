const path = require("path");
const pkg = require("./package.json");


export default {
	input: "src/index.ts",
	output: [
		{file: pkg["module"], format: "es", sourcemap: true},
		{file: pkg["main"], format: "cjs", sourcemap: true},
	],
	plugins: [
		require("rollup-plugin-tsc")({
			compilerOptions: {
				noUnusedLocals: true,
				declaration: true,
				declarationDir: path.dirname(pkg["types"]),
			},
		}),
	],
};
