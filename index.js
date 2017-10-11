#! /usr/bin/env node

const fs = require('fs');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);

// Make file
async function makeFile(name, type){
    try {
        let modal;
        switch(type){
            case '.js':
                modal = require('./templates/express');
                break;
            case '.py':
                // Handle Python
                break;
            // case
            // Handle Java servers
            default:
                console.log("Extension case is not handled:", type);
                return;
        }
        let fileName = name + type;
        return writeFileAsync(fileName, modal);
    } catch(e) {
        console.log("Error in writing new file", e);
    }
}

async function readFile(path, modal, callback){
    try {
        return readFileAsync(path);
    } catch(e) {
        console.log("Error is reading file");
    }
}

// callback
function addAPI(str, modal){
    let route = modal;
    switch(modal.language){
        
    }


    return str.concat(route);
}

function removeAPI(modal){

}

module.exports = {
    writeFileAsync: writeFileAsync,
    readFileAsync: readFileAsync,
    makeFile: makeFile,
    readFile: readFile
}