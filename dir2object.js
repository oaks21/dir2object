'use strict';

const fs = require('fs');
const PATH = require('path');

function dir2object(path, obj) {

    if (!obj) var obj = new Object;

    readdir(path).forEach((element) => {

        var stats = {}

        try {
            stats = fs.statSync(PATH.join(path, element))
        } catch (err) {
            return null;
        }

        if (stats.isFile()) {
            obj[element] = stats
        } else if (stats.isDirectory()) {
            obj[element] = new Object;
            dir2object(PATH.join(path, element), obj[element])
        }

    })

    return obj

}

function readdir(path) {

    var dir = {};

    try {
        dir = fs.readdirSync(path);
    } catch (err) {
        if (err.code == "EACCES")
            return null;
        else throw err;
    }

    return dir;

}

module.exports = dir2object;