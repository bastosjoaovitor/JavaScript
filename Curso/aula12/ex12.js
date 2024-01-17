var idade = 71
if (idade < 16) {
    console.log('Menor de idade, NÃO VOTA.')
} else if (16 <= idade && idade < 18) {
        console.log('Menor de idade, VOTO OPCIONAL')
    } else if (18 <= idade && idade <= 70) {
            console.log('Maior de idade, VOTO OBRIGATÓRIO.')
        } else if (idade > 70) {
                console.log('Maior de idade, VOTO OPCIONAL.')
            }