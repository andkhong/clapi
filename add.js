#! /usr/bin/env node

const argv = require('minimist')(process.argv.slice(2));
const { join } = require('path');

const { writeFileAsync, readFile } = require('./index')

let filePath = join(__dirname, argv._[0]);

function buildRoute(str, modal){
    let route = `
app.${modal.method}("${modal.route}", (req, res) => {
    console.log(res);
});`;

    return str.concat(route);
}

readFile(filePath, '1', '1')
    .then(buffer => buffer.toString())
    .then(str => writeFileAsync(filePath, buildRoute(str, require('./modals/'))))
    .then(() => console.log("API successfully written to", filePath))
    .catch(e => console.log("Error", e));