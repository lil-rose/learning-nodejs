// console.log(process.argv)
// x = [1, 2, 3, 4, 5]
// m = length(x)
n = process.argv.length
suma = 0
for (let i = 2; i < n; i++){
    suma += parseInt(process.argv[i])
}


console.log(suma)

/**
 * Solución oficial:
 */
// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//     result += Number(process.argv[i])
// }

// console.log(result)
