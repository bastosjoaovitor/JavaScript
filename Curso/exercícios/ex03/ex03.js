function contar() {

var inicio = Number(window.document.getElementById('inicio').value);
var fim = Number(window.document.getElementById('fim').value);
var passo = Number(window.document.getElementById('passo').value);
var p = window.document.getElementById('div2-p');

if (inicio == '' || fim == '' || passo == '') {
    window.alert('Você deve preencher todos os campos abaixo para a contagem.')
} else {
    
    if (passo <= 0) {
        window.alert(`Não é possível contar de ${passo} em ${passo}, então o programa contará de 1 em 1.`)
        var passo = 1
    }

    p.innerHTML = `${inicio}`
    inicio += passo
    while (inicio <= fim) {
        p.innerHTML += ` &#128073; ${inicio}`
        inicio += passo
    }
}

}