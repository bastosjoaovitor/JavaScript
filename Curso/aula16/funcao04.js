function fat(numero) {
    total = 1
    for (let contador = numero; contador > 1; contador--) {
        total *= contador
    }
    return total
}

console.log(fat(5))