var ano_atual = new Date().getFullYear()

var p = window.document.getElementById("div2-p")

var img = window.document.getElementById("div2-img")

function verificar() {

    var ano_de_nasc = window.document.getElementById('ano_de_nascimento').value;

    var idade = ano_atual - ano_de_nasc

    var opcaoSelecionada = document.querySelector('input[name="escolha"]:checked');

    var genero = opcaoSelecionada ? opcaoSelecionada.value : null;

    if (ano_de_nasc == "" || genero == null) {
        p.innerHTML = '<p>Preencha todos os campos acima.</p>';
        img.src = 'imagens/random.jpg'
        document.getElementById("div2-p").style.color = 'red'
    } else {

    document.getElementById("div2-p").style.color = 'black'
    document.getElementById("div2-p").style.font = 'bold 15pt Arial'

    if (idade < 0) {
        p.innerHTML = '<p>Ainda não nasceu.&#128077;</p>'
        document.getElementById("div2-p").style.color = 'red'
        } else if (idade == 0) {
            p.innerText = `${genero} com menos de 1 ano.`
            img.src = "imagens/baby.jpg";
        } else if (idade == 1) {
            p.innerHTML = `${genero} com 1 ano.`
            img.src = "imagens/baby.jpg";
        } else if (idade == 2) {
            p.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'imagens/baby.jpg'
        } else if (idade <= 12) {
            p.innerHTML = `${genero} com ${idade} anos.`
            if (genero == 'Homem') {img.src = 'imagens/boy.jpg'} else {img.src = 'imagens/girl.jpg'}
        } else if (idade <= 24) {
            p.innerHTML = `${genero} com ${idade} anos.`
            if (genero == 'Homem') {img.src = 'imagens/adolescentM.jpg'} else {img.src = 'imagens/adolescentF.jpg'}
        } else if (idade <= 45) {
            p.innerHTML = `${genero} com ${idade} anos.`
            if (genero == 'Homem') {img.src = 'imagens/man.jpg'} else {img.src = 'imagens/woman.jpg'}
        } else if (idade <= 65) {
            p.innerHTML = `${genero} com ${idade} anos.`
            if (genero == 'Homem') {img.src = 'imagens/old-man.jpg'} else {img.src = 'imagens/old-woman.jpg'}
        } else if (idade <= 110) {
            p.innerHTML = `${genero} com ${idade} anos.`
            if (genero == 'Homem') {img.src = 'imagens/very-old-man.jpg'} else {img.src = 'imagens/very-old-woman.jpg'}
        } else {
            document.getElementById('div2-p').style.color = 'red'
            p.innerHTML = `${genero} com ${idade} anos.`
            img.src = 'imagens/F.jpg'
        }
    }
}