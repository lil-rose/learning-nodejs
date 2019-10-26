// Modules
const fs = require('fs')

file_path = process.argv[2]

//file_path = "03_IO_sync/file_example.txt"

file_buffer = fs.readFileSync(file_path)

console.log(file_buffer.toString().split('\n').length - 1)


/**
 * Solución oficial:
 */
'use strict'
// const fs = require('fs')

// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)

// // note you can avoid the .toString() by passing 'utf8' as the
// // second argument to readFileSync, then you'll get a String!
// //
// // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1