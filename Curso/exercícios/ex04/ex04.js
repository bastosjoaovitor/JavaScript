function tabuada() {

var numero = Number(window.document.getElementById('number').value);
var select = window.document.getElementById('select');

if (numero == '') {
    window.alert('Preencha o campo "Número" para gerar a tabuada.')
} else if (select.options.length == 1) {
    select.options[0].innerText = `1 x ${numero} = ${numero}`
    for (var i = 2; i < 11; i++) {
        select.options[select.options.length] = new Option(`${i} x ${numero} = ${i*numero}`);
    }
} else {
    for (var i = 0; i < 10; i++) {
        select.options[i].innerText = `${(i+1)} x ${numero} = ${(i+1)*numero}`
    }
}

}