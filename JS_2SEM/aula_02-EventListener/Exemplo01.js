//Selecionando o botao pelo ID
const botao = document.querySelector("#botao");
const contadorElemento = document.querySelector("#contador");

//inicializando contador
let contador = 0;

//funçao que sera chamada quando o botao for clicado
function aumentarContador()
{
    contador++;
    contadorElemento.textContent = contador;
}

//Adicionando ouvinte do evento para clique do botao
botao.addEventListener("click", aumentarContador);