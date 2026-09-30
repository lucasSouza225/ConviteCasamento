const botoesOpcao = document.querySelectorAll('.botao-opcao');
const formulario = document.getElementById('formulario-presenca');
const cartaoFormulario = document.getElementById('cartao-formulario');
const cartaoMensagem = document.getElementById('cartao-mensagem');

botoesOpcao.forEach(botao => {
    botao.addEventListener('click', () => {
        botoesOpcao.forEach(b => b.classList.remove('ativo'));
        botao.classList.add('ativo');
    });
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const presencaSelecionada = document.querySelector('.botao-opcao.ativo').dataset.valor;
    const nome = document.getElementById('nome').value;
    const acompanhantes = document.getElementById('acompanhantes').value;

    if (!nome) {
        alert('Por favor, preencha o seu nome.');
        return;
    }

    console.log(`Nome: ${nome} | Presença: ${presencaSelecionada} | Acompanhantes: ${acompanhantes}`);

    cartaoFormulario.classList.add('escondido');
    cartaoMensagem.classList.remove('escondido');
});