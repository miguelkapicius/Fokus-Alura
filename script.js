let tempoTela = document.querySelector("#timer");
const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const imagem = document.querySelector(".app__image");
const texto = document.querySelector(".app__title");
const play = document.querySelector("#start-pause");
const playBt = document.querySelector("#start-pause > span");
const pauseImg = document.querySelector("#start-pause > img");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocus = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
musica.loop = true;
const audioPlay = new Audio("/sons/play.wav");
const audioPause = new Audio("/sons/pause.mp3");
const audioFim = new Audio("/sons/beep.mp3");

let intervaloId = null;
timer = 1500;

function alterarContexto(contexto) {
    mostrarTempo();
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
            break;

        case "descanso-curto":
            texto.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            curtoBtn.classList.add("active");
            break;

        case "descanso-longo":
            texto.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            longoBtn.classList.add("active");
            break;

        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (timer <= 0) {
        audioFim.play();
        alert("Tempo Finalizado!");
        reset();
        return;
    }
    timer -= 1;
    mostrarTempo();
};

musicaFocus.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

focoBtn.addEventListener("click", () => {
    timer = 1500;
    alterarContexto("foco");
});

curtoBtn.addEventListener("click", () => {
    timer = 300;
    alterarContexto("descanso-curto");
});

longoBtn.addEventListener("click", () => {
    timer = 900;
    alterarContexto("descanso-longo");
});

play.addEventListener("click", playPause);

function playPause() {
    if (intervaloId) {
        audioPause.play();
        reset();
        return;
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    pauseImg.setAttribute("src", `/imagens/pause.png`);
    playBt.textContent = "Pausar";
}

function reset() {
    clearInterval(intervaloId);
    pauseImg.setAttribute("src", `/imagens/play_arrow.png`);
    playBt.textContent = "Começar";
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(timer * 1000).toLocaleTimeString("pt-br", {
        minute: "2-digit",
        second: "2-digit",
    });
    tempoTela.innerHTML = `${tempo}`;
}

mostrarTempo();
