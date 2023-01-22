const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const linkTrailer = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkTrailer);
});

fecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});


