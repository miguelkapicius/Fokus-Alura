const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
let timer = document.querySelector("#timer");
const imagem = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const play = document.querySelector("#start-pause");

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", `${contexto}`);
  imagem.setAttribute("src", `/imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      texto.innerHTML = `
      Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>
      `;
      timer = 1500;
      break;

    case "descanso-curto":
      texto.innerHTML = `
      Que tal dar uma respirada?<br>
      <strong class="app__title-strong">Faça uma pausa curta!</strong>
      `;
      timer = 300;
      break;

    case "descanso-longo":
      texto.innerHTML = `
      Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>
      `;
      timer = 900;
      break;

    default:
      break;
  }
}

focoBtn.addEventListener("click", () => {
  alterarContexto("foco");
});

curtoBtn.addEventListener("click", () => {
  alterarContexto("descanso-curto");
});

longoBtn.addEventListener("click", () => {
  alterarContexto("descanso-longo");
});
