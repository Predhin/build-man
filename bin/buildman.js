#!/usr/bin/env node
const argv = require("yargs").argv;
const buildman = require("../index");
console.log(process.cwd())
buildman(argv);
//console.log("From Global module!");
