let timer = document.querySelector("#timer");
const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const imagem = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const play = document.querySelector("#start-pause");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocus = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
musica.loop = true

function alterarContexto(contexto) {
    html.setAttribute("data-contexto", `${contexto}`);
    imagem.setAttribute("src", `/imagens/${contexto}.png`);
    botoes.forEach((contexto) => {
        contexto.classList.remove("active");
    });
    switch (contexto) {
        case "foco":
            texto.innerHTML = `
      Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `;
            focoBtn.classList.add("active");
            timer = 1500;
            break;

        case "descanso-curto":
            texto.innerHTML = `
      Que tal dar uma respirada?<br>
      <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
            curtoBtn.classList.add("active");
            timer = 300;
            break;

        case "descanso-longo":
            texto.innerHTML = `
      Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
            longoBtn.classList.add("active");
            timer = 900;
            break;

        default:
            break;
    }
}

musicaFocus.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBtn.addEventListener("click", () => {
    alterarContexto("foco");
});

curtoBtn.addEventListener("click", () => {
    alterarContexto("descanso-curto");
});

longoBtn.addEventListener("click", () => {
    alterarContexto("descanso-longo");
});
