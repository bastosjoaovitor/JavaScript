function parimpar(numero) {
    if (numero % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar(4)

console.log(res)

console.log(parimpar(5))