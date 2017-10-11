#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const { makeFile } = require('./index');
const fileName = argv._[0];
const extension = argv._[1];

makeFile(fileName, extension)
    .then(() => console.log("File is succesfully created"))
    .catch(err => console.log("Unable make file", err))