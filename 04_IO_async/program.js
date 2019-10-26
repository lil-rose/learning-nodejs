// Modules
const fs = require('fs')

file_path = process.argv[2]

//file_path = "03_IO_sync/file_example.txt"
fs.readFile(file_path, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.split('\n').length - 1);
});

/**
 * Solución oficial:
 */
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
//     // fs.readFile(file, 'utf8', callback) también se puede utilizar
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
// })