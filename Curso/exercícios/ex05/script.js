var numbers = []
var div = document.getElementById('div2')

var select = document.getElementById('select')
function addnumber() {
    var number = Number(document.getElementById('number').value);
    if (number == '') {
        window.alert('Digite um número antes de clicar em adicionar.')
    } else if (numbers.includes(number)) {
        window.alert('Este número ja foi adicionado, adicione outro ou finalize.')
    } else if (number < 1 || number > 100) {
        window.alert('Digite um número entre 1 e 100.')
    } else if (number % 1 != 0) {
        window.alert('Digite um número inteiro.')
    } else {
    numbers.push(number);
    select.options[select.options.length] = new Option(`Número ${number}`);
    }
}

function finalizar() {
    if (numbers.length == 0) {
        window.alert('Adicione pelo menos 1 valor antes de finalizar.')
    } else {
        var total_de_numeros_adicionados = numbers.length
        var maior_numero = 0
        var menor_numero = 101
        var total = 0

        for (number of numbers) {
            total += number
            if (number > maior_numero) {
                maior_numero = number
            }
            if (number <  menor_numero) {
                menor_numero = number
            }
        }

        var media = total / numbers.length

        div.appendChild(document.createElement("p")).textContent = `Ao todo, temos ${total_de_numeros_adicionados} números cadastrados.`
        
        div.appendChild(document.createElement("p")).textContent = `O maior valor informado foi ${maior_numero}.`

        div.appendChild(document.createElement("p")).textContent = `O menor valor informado foi ${menor_numero}.`

        div.appendChild(document.createElement("p")).textContent = `Somando todos os valores, temos ${total}.`

        div.appendChild(document.createElement("p")).textContent = `A média dos valores digitados é ${media}.`
    }
}