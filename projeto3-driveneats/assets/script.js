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

/* function finalizarPedido() {    
    const prato = document.querySelector('.opçoesPratos .selecionado');
    const bebida = document.querySelector('.opçoesBebidas .selecionado');
    const sobremesa = document.querySelector('.opçoesSobremesas .selecionado');
    
    const telaConfirma = document.querySelector('.resumoPedido');
    const opaco = document.querySelector('.fundo');

    if (prato && bebida && sobremesa !== null) { 
        telaConfirma.classList.toggle('showResumo');
        opaco.classList.toggle('opaco');    
    } 
}

function resumo() {
    const pratoEsc = document.querySelector('.opçoesPratos .selecionado .nome_prato');
    const bebidaEsc= document.querySelector('.opçoesBebidas .selecionado .nome_bebida');
    const sobremesaEsc = document.querySelector('.opçoesSobremesas .selecionado .nome_sobremesa');
    
    const inserirPrato = document.querySelector('.resumoPedido .resumo .pratoEsc');
    const inserirBebida = document.querySelector('.resumoPedido .resumo .bebidaEsc');
    const inserirSobremesa = document.querySelector('.resumoPedido .resumo .sobremesaEsc');

    inserirPrato.innerHTML = "PRATO";
    inserirBebida.innerHTML = "BEBIDA";
    inserirSobremesa.innerHTML = "SOBREMESA";
} */

function mensagem(){
    const pratoEscolhido = document.querySelector('.opçoesPratos .selecionado .nome_prato');
    const bebidaEscolhida = document.querySelector('.opçoesBebidas .selecionado .nome_bebida');
    const sobremesaEscolhida = document.querySelector('.opçoesSobremesas .selecionado .nome_sobremesa');
    
    const valorPrato = document.querySelector('.opçoesPratos .selecionado .valor');
    const valorBebida = document.querySelector('.opçoesBebidas .selecionado .valor');
    const valorSobremesa = document.querySelector('.opçoesSobremesas .selecionado .valor');

    const valorTotal = Number((valorPrato.textContent.replace(/\D/g, '')/100).toFixed(2)) + Number((valorBebida.textContent.replace(/\D/g, '')/100).toFixed(2)) + Number((valorSobremesa.textContent.replace(/\D/g, '')/100).toFixed(2));

    const link = "https://wa.me/5535999438824?text=";
    const msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${pratoEscolhido.textContent}
    - Bebida: ${bebidaEscolhida.textContent}
    - Sobremesa: ${sobremesaEscolhida.textContent}
Total: R$ ${valorTotal.toFixed(2)}`);

    const url_pedido = (link + msg);
    window.open(url_pedido);
}