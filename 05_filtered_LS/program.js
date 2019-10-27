const fs = require('fs')

const folder_path = process.argv[2]
// console.log('folder_path', folder_path)
const file_extension = process.argv[3]
// console.log('file_extension', file_extension)
let files_list = []

fs.readdir(folder_path, (err, data) => {
    if (err) throw err;
    for(let i =0; i< data.length; i++){
        this_extension = data[i].split(".")[1]
        if (this_extension == file_extension){
            files_list.push(data[i])
        }
    }
    for(let j = 0; j< files_list.length; j++){
        console.log(files_list[j])
    }
});

/**
 * Solución oficial:
 */
// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//     if (err) return console.error(err)
//     files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//         console.log(file)
//     }
//     })
// })