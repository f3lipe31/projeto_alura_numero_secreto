let listaDeNumeroSorteado = [];
let numeroLimite = 50
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextonatela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
    function exibirMensagemInicial() {
    exibirTextonatela('h1','Jogo do número secreto');
    exibirTextonatela('p','Escolha um número de 1 a 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextonatela ('h1','Acertou!');
        let palavraTentativa = tentativas > 1  ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextonatela ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
            if (chute > numeroSecreto) {
                exibirTextonatela ('p','Número secreto é menor!');
            } else {
                exibirTextonatela ('p','O número secreto é maior');
            }
            tentativas++;
            limparCampo()

    }        
}
function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt (Math.random() *numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
    
    if (quantidadeDeElementosNaLista==numeroLimite) {
        listaDeNumeroSorteado = [];
    }
    
    if (listaDeNumeroSorteado.includes(NumeroEscolhido)){
        return gerarNumeroAleatori();
    } else {
        listaDeNumeroSorteado.push(NumeroEscolhido);
        console.log(listaDeNumeroSorteado)
        return NumeroEscolhido;
    }
     
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}
    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirMensagemInicial();
        document.getElementById ('reiniciar').setAttribute ('disabled',true)
    }