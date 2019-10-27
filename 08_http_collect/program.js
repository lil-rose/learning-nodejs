'use strict'
const http = require('http')
let coleccion = ""
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on('data', function(data){
        coleccion = coleccion + data
    })
    response.on('error', console.error)
    response.on('end', function(){
        console.log(coleccion.length)
        console.log(coleccion)
    })
}).on('error', console.error)

/**
 * Solución oficial:
 */

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })