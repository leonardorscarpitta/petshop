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
