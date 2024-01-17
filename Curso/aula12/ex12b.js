var hora_atual = new Date().getHours()
console.log(`Agora são exatamente ${hora_atual} horas`)
if (hora_atual < 12) {
    console.log('Bom dia!')
} else if (hora_atual <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}