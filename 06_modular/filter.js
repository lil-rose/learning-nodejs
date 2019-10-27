const fs = require('fs')
const path = require('path')

function filter_by_ext(folder, ext, callback){
    files_list = []

    fs.readdir(folder, function (err, files) {

        if (err) return callback(err)

        files.forEach(function (file) {
            if (path.extname(file) === `.${ext}`) {
                files_list.push(file)
            }

        })

        callback(null, files_list)
    })
}

module.exports = filter_by_ext

/**
 * Solución oficial:
 * 
 'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
    if (err) {
        return callback(err)
    }

    list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
    })
}
 */