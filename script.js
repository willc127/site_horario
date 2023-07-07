function carregar() {
    var msg = document.getElementById('msg') // pegar a mensagem
    var img = document.getElementById('imagem') // pegar a imagem
    var data = new Date() // pegar a data atual
    var hora = data.getHours() // pegar a hora atual
    var min = data.getMinutes() // pegar o minuto atual
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg' // mudar a imagem
        document.body.style.background = 'rgb(255,255,150)' // mudar o fundo
        msg.innerHTML += ` Bom dia!` // mudar a mensagem
        document.getElementById('header').style.color = 'black'; // mudar a cor do título
        document.getElementById('footer').style.color = 'black'; // mudar a cor do rodape
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(200,200,250)'
        msg.innerHTML += ` Boa tarde!`
        document.getElementById('header').style.color = 'black';
        document.getElementById('footer').style.color = 'black';
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(32,33,36)'
        msg.innerHTML += ` Boa noite!`
        document.getElementById('header').style.color = 'white';
        document.getElementById('footer').style.color = 'white';
    }
}

