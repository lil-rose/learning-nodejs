const http = require('http')
url_path = process.argv[2]
// url_path = "http://jsonplaceholder.typicode.com/todos/1"
// let i = 0
http.get(url_path, function(response){
    // response es un objeto Stream de Node, los cuales emiten eventos
    // en este caso puede suscribir los callbacks: data, error y end
    response.setEncoding('utf8')
    response.on('data', function (data) {
        console.log(data)
        // i = i + 1
    })

    response.on('error', function(err){
        console.log('Hubo un error:', err)
    })

})

/**
 * Respuesta oficial
 */
// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
// }).on('error', console.error)