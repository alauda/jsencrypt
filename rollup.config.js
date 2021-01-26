"use strict";
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const replace = require("@rollup/plugin-replace");
const pkg = require("./package.json");

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "./src/index.js",
  plugins: [
    nodeResolve(),
    replace({
      JSENCRYPT_VERSION: JSON.stringify(pkg.version),
    }),
  ],
  output: [
    {
      file: pkg.main,
      format: "umd",
      name: "JSEncrypt",
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
};

module.exports = config;
