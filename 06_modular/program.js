'use strict'

const path = require('path')
const filter = require('./filter')

const folder = process.argv[2]
const ext = process.argv[3]
// console.log('ENTENDIENDO MI MODULO', filter)
filter(folder, ext, function (err, files) {
    if (err) return console.error(err)

    files.forEach(function (file) {
        console.log(file)
    })

})

/**
 * Solución oficial:
 * 
'use strict'
const filterFn = require('./solution_filter.js')
const dir = process.argv[2]
const filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
    if (err) {
    return console.error('There was an error:', err)
    }

    list.forEach(function (file) {
    console.log(file)
    })
})
 */