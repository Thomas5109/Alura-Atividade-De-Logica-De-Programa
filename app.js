let listaDeNumerosSecretos = [];
let numeroDeTentativas = 1;
const numeroMaximoDeElementosNaLista = 5;

let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }


}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentaviva = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';

        exibirTextoNaTela('p', `Você descobriu o número secreto com ${numeroDeTentativas} ${palavraTentaviva}!`);

        document.getElementById("reiniciar").removeAttribute('disabled');
    } else {
        exibirTextoNaTela('h1', 'Errou!');

        numeroDeTentativas = numeroDeTentativas + 1;

        if(numeroSecreto > chute)
        exibirTextoNaTela('p', 'Número secreto é maior');

        if(numeroSecreto < chute)
        exibirTextoNaTela('p', 'Número secreto é menor');
    }
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroGerado = parseInt(Math.random() * 10 + 1);

    let quatidadeDeElementosNaLista = listaDeNumerosSecretos.length;

    if (quatidadeDeElementosNaLista == numeroMaximoDeElementosNaLista) {
        listaDeNumerosSecretos = [];
    }

    if (listaDeNumerosSecretos.includes(numeroGerado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSecretos.push(numeroGerado);
        console.log(listaDeNumerosSecretos);
        return numeroGerado;
    }

}

function novoNumeroSecreto() {
    limparCampo();
    mensagemInicial();
    return numeroSecreto = gerarNumeroAleatorio(),
    numeroDeTentativas = 1,
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ' ';
}


mensagemInicial();








