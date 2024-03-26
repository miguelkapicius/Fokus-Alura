const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const timer = document.querySelector("#timer");
const imagem = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const play = document.querySelector("#start-pause")

focoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
  timer = 1500;
});

curtoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
  timer = 300;
});

longoBtn.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
  timer = 900;
});
