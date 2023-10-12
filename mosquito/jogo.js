let altura = 0
let largura = 0
let vidas = 1
let tempo = 15

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if(nivel == 'dificil'){
    criaMosquitoTempo = 1000
} else{
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

ajustaTamanhoPalcoJogo()

let cronometro = setInterval(function(){
    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function posicaoRandomica(){
    //remover o mosquito 
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    if(vidas > 3){
        window.location.href = 'fim_de_jogo.html'
    } else {
        document.getElementById('v'+vidas).src = "assets/imagens/coracao_vazio.png" //Concatenar
        vidas++
    }
}

let posicaoX = Math.floor(Math.random()*largura) - 90
let posicaoY = Math.floor(Math.random()*altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX //Se a posicao for menor a 0 fica 0 se não mantem
posicaoY = posicaoY < 0 ? 0 : posicaoY

//Criar mosquito
let mosquito = document.createElement('img')
mosquito.src = "assets/imagens/mosquito.png"
mosquito.style.left = posicaoX + 'px'
mosquito.style.right = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.style.height = tamanhoAleatorio() + 'px'
mosquito.onclick = function(){
    this.remove()
}
document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random()*3)

    switch(classe){
        case 0:
        return 50
        case 1:
        return 100
        case 2:
        return 200
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
        return 'ladoA'
        case 1:
        return 'ladoB'
    }
}









