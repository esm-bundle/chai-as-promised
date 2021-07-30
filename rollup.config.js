import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

function createConfig(format) {
  const dir = format === "module" ? "esm" : format;
  return {
    input: require.resolve("chai-as-promised"),
    output: {
      file: `${dir}/index.js`,
      sourcemap: true,
      format,
    },
    plugins: [nodeResolve(), commonjs(), terser()],
  };
}

export default [createConfig("module"), createConfig("system")];
