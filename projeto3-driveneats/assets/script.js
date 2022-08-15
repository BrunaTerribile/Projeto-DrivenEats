function selecionarPrato(classOpcao) {
    const botaoSelec = document.querySelector('.opçoesPratos .selecionado');
    const check = document.querySelector('.opçoesPratos .selecionado .icone');


    if (botaoSelec !== null && check !== null){
        botaoSelec.classList.remove('selecionado');
        check.classList.remove('aparecer_icone');
    }

    const seletor = '.'+ classOpcao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

    const seletor2 = (seletor +' .icone');
    const botao2 = document.querySelector(seletor2);
    botao2.classList.add('aparecer_icone');

    confirmarPedido();
    
}

function selecionarBebida(classOpcao) {
    const botaoSelec = document.querySelector('.opçoesBebidas .selecionado');
    const check = document.querySelector('.opçoesBebidas .selecionado .icone');


    if (botaoSelec !== null && check !== null){
        botaoSelec.classList.remove('selecionado');
        check.classList.remove('aparecer_icone');
    }

    const seletor = '.'+ classOpcao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

    const seletor2 = (seletor +' .icone');
    const botao2 = document.querySelector(seletor2);
    botao2.classList.add('aparecer_icone');

    confirmarPedido();
}

function selecionarSobremesa(classOpcao) {
    const botaoSelec = document.querySelector('.opçoesSobremesas .selecionado');
    const check = document.querySelector('.opçoesSobremesas .selecionado .icone');


    if (botaoSelec !== null && check !== null){
        botaoSelec.classList.remove('selecionado');
        check.classList.remove('aparecer_icone');
    }

    const seletor = '.'+ classOpcao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

    const seletor2 = (seletor +' .icone');
    const botao2 = document.querySelector(seletor2);
    botao2.classList.add('aparecer_icone');

    confirmarPedido();
}

function confirmarPedido() {
    const prato = document.querySelector('.opçoesPratos .selecionado');
    const bebida = document.querySelector('.opçoesBebidas .selecionado');
    const sobremesa = document.querySelector('.opçoesSobremesas .selecionado');
    const finalizar = document.querySelector('.barra_inferior .botao_pedido')


    if (prato && bebida && sobremesa !== null) { 
        finalizar.classList.add('ativo');
        finalizar.innerHTML = `Fechar pedido`;
    } 
}

function finalizarPedido() {
    const prato = document.querySelector('.opçoesPratos .selecionado');
    const bebida = document.querySelector('.opçoesBebidas .selecionado');
    const sobremesa = document.querySelector('.opçoesSobremesas .selecionado');
    
    const telaConfirma = document.querySelector('.resumoPedido');
    const opaco = document.querySelector('.fundo');

    if (prato && bebida && sobremesa !== null) { 
        telaConfirma.classList.add('showResumo');
        opaco.classList.add('opaco');    
    } 
}

/* function mensagem() {
    https://wa.me/5535999438824
}*/