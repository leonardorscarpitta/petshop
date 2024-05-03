// Slideshow
let carrosselImagens = ['./src/assets/banner1.jpg', './src/assets/banner2.jpg', './src/assets/banner3.jpg'];
let index = 0;
let changePicture = 3000;

function carrossel() {
    document.querySelector('.container__carrosssel__imagem').src = carrosselImagens[index];
    index++;

    if(index == carrosselImagens.length) {
        index = 0;
    }
    setTimeout('carrossel()', changePicture);
}
carrossel();


// Validação de contato
const contato = {
    nome: document.getElementById('nome'),
    numero: document.getElementById('numero'),
    assunto: document.getElementById('assunto'),
    email: document.getElementById('email'),
    enviar: document.getElementById('btnEnviar')
}
contato.enviar.addEventListener('click', () => {
    if (contato.nome.value.length == '' || contato.assunto.value.length == '' || contato.numero.value.length == '' || contato.email.value.length == '') {
        swal('Verifique os campos em branco!');
    } else {
        swal('Mensagem enviada com sucesso! Aguarde pela resposta em seu e-mail!')
    }
})

// Menu hamburguer
let menuHamburguerBotao = document.querySelector('#menuHamburguer');
let menu = document.querySelector('.cabecalho__navegacao__itens');

menuHamburguerBotao.addEventListener('click', () => {
    menu.classList.toggle('active')
})