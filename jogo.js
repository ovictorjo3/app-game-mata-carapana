
var altura = 0
var largura = 0
var altura1 = 1
var largura1 = 1

function ajustaTamanhoPalcoJogo(){

	var altura = window.innerHeight
	var largura = window.innerWidth

	altura1 = altura
	largura1 = largura

	console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

	var posicaoX = Math.floor(Math.random() * largura1) - 90
	var posicaoY = Math.floor(Math.random() * altura1) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'

	document.body.appendChild(mosquito)

}