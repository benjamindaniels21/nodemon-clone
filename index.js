#!/usr/bin/env node

const chokidar = require("chokidar");
const debounce = require("lodash.debounce");
const program = require("caporal");

const start = debounce(() => {
  console.log("starting users program");
}, 100);

chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => console.log("FILE CHANGED"))
  .on("unlink", () => console.log("FILE UNLINKED"));
