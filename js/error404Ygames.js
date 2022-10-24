//VARIABLES GENERALES
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");


//EVENTOS CLICK IMGS
rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});


//FUNCION DE RESULTADOS
function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "assets/" + userOption + ".svg";

    resultText.innerHTML = "ELIGIENDO...";


    //ANIMACION INTERVALO PARA RESULTADOS
    const interval = setInterval(function () {
        const machineOption = calcMachineOption();
        machineImg.src = "assets/" + machineOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "assets/" + machineOption + ".svg";

        switch (result) {
            case TIE:
                resultText.innerHTML = "HAS &nbsp; EMPATADO &nbsp; 👍";
                break;
            case WIN:
                resultText.innerHTML = "HAS &nbsp; GANADO &nbsp; 😎";
                break;
            case LOST:
                resultText.innerHTML = "HAS &nbsp; PERDIDO &nbsp; 😐";
                break;
        }
        isPlaying = false;
    }, 3000);
}


//NUMERO ALEATORIO DE LA MAQUINA
function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}


//RETORNANDO DEFINICION
function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return TIE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return LOST;
        if (machineOption === SCISSORS) return WIN;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return LOST;
        if (machineOption === ROCK) return WIN;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return LOST;
        if (machineOption === PAPER) return WIN;
    }
}


//FUNCION DE ESCRITURA MÁQUINA DE MI PAG ERROR 404
function type(n, t) {
    var str = document.getElementsByTagName("code")[n].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName("code")[n].innerHTML = "";

    setTimeout(function () {
        var se = setInterval(function () {
            i++;
            document.getElementsByTagName("code")[n].innerHTML =
                str.slice(0, i) + "|";
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByTagName("code")[n].innerHTML = str;
            }
        }, 10);
    }, t);
}

type(0, 0);
type(1, 600);
type(2, 1300);