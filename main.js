const $buttonIniciar = document.getElementById("button_iniciar");
const $buttonAgregar = document.getElementById("button_agregar");
const $containerMunieco = document.querySelector("canvas");
const pincel = $containerMunieco.getContext("2d");
const $inicio = document.querySelector(".inicio");
const $juego = document.querySelector(".juego");
const $agregarPalabra = document.querySelector(".agregar-palabra");
const $buttonCancelar = document.querySelector("#cancelar");
const palabras = ["CANCION", "FAJITA", "PALABRA", "CREACION", "FRIJOL", "QUINOA"];
const $containerPalabra = document.querySelector(".container-palabra");
const $containerLetrasIncorrectas = document.querySelector(".letras-incorrectas");
const $cartel = document.querySelector(".cartel");
const $agregarPalabraText = document.querySelector(".agregar-palabra-text");
const $alert = document.querySelector(".alert");
const $buttonDesistir = document.querySelector("#desistir")
let nuevaPalabra = "";
let palabraRandom = "AHORCADO";
let letrasIncorrectas = [];
let letrasCorrectas = [];
let contadorAciertos = -1;
const munieco = [
    base = function () {
        pincel.beginPath();
        pincel.moveTo(0, 320);
        pincel.lineTo(300, 320);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke()
    },
    mastil = function () {
        pincel.beginPath();
        pincel.moveTo(55, 320);
        pincel.lineTo(55, 5);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    mastilHorizontal = function () {
        pincel.beginPath();
        pincel.moveTo(53, 5);
        pincel.lineTo(227, 5);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    cuerda = function () {
        pincel.beginPath();
        pincel.moveTo(225, 5);
        pincel.lineTo(225, 50);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    cabeza = function () {
        pincel.beginPath();
        pincel.arc(225, 75, 25, 0, 2 * 3.14);
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    cuerpo = function () {
        pincel.beginPath();
        pincel.moveTo(225, 100);
        pincel.lineTo(225, 220);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    brazoDerecho = function () {
        pincel.beginPath();
        pincel.moveTo(225, 100);
        pincel.lineTo(195, 150);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    brazoIzquierdo = function () {
        pincel.beginPath();
        pincel.moveTo(225, 100);
        pincel.lineTo(255, 150);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    piernaDerecha = function () {
        pincel.beginPath();
        pincel.moveTo(225, 220);
        pincel.lineTo(195, 270);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    },
    piernaIzquierda = function () {
        pincel.beginPath();
        pincel.moveTo(225, 220);
        pincel.lineTo(255, 270);
        pincel.lineWidth = 4;
        pincel.strokeStyle = "#072b61";
        pincel.stroke();
    }

]
let contadorError = 0;

function dibujarMunieco() {
    let dibujado = munieco.slice(0, contadorError + 1)

    dibujado.map(e => e())
}

function agregarPalabra() {
    if (nuevaPalabra == "") {

        $alert.style.color = "red"
    } else {
        palabras.push(nuevaPalabra);
        nuevaPalabra = "";
        palabraRandom = "AHORCADO";
        mostrarJuego();
        dibujarMunieco();
    }
}

$agregarPalabraText.addEventListener("change", e => {
    if (!/^[A-ZÑ]*$/.test(e.target.value)) {
        nuevaPalabra = "";
        e.target.value = "";
    } else {
        nuevaPalabra = e.target.value;
        e.target.value = "";
        $alert.style.color = "#495057";
    }
})

$agregarPalabraText.addEventListener("click", e => {
    $alert.style.color = "#495057"
})

function mostrarJuego() {
    $inicio.classList.add("dis-none");
    $agregarPalabra.classList.add("dis-none")
    $juego.classList.remove("dis-none");
    contadorError = munieco.length;
    $containerPalabra.innerHTML = "";
    $containerLetrasIncorrectas.innerHTML = "";
    $cartel.classList.add("dis-none");
    dibujarLineas();
    let input = document.querySelector(".input-letra");
    input.setAttribute("disabled", "true")
    for (let i = 0; i < palabraRandom.length; i++) {
        $containerPalabra.children[i].textContent = palabraRandom[i];
    }
}

$buttonDesistir.addEventListener("click", e => {
    $juego.classList.add("dis-none")
    $inicio.classList.remove("dis-none");
})

$buttonIniciar.addEventListener("click", (e) => {
    palabraRandom = "AHORCADO";
    mostrarJuego();
    dibujarMunieco();
})

$buttonAgregar.addEventListener("click", (e) => {
    $inicio.classList.add("dis-none");
    $agregarPalabra.classList.remove("dis-none");
})

$buttonCancelar.addEventListener("click", (e) => {
    $agregarPalabra.classList.add("dis-none");
    $inicio.classList.remove("dis-none");
})

function dibujarLineas() {
    for (let i = 0; i < palabraRandom.length; i++) {
        let span = document.createElement("span");
        span.classList.add("span-letra");
        $containerPalabra.append(span);
    }
    let input = document.createElement("input");
    input.classList.add("input-letra");
    input.setAttribute("oninput", "verificarCaracter(event)");
    input.setAttribute("maxlength", "1");
    $containerPalabra.append(input);
}

function palabraAlAzar() {
    if(contadorError == 0 || contadorError == munieco.length) {
        contadorError = 0;
        pincel.clearRect(0, 0, 280, 325);
        contadorAciertos = 0;
        letrasCorrectas = [];
        letrasIncorrectas = [];
        let numeroRandom = Math.floor(Math.random() * (palabras.length - 0));
        palabraRandom = palabras[numeroRandom];
        $containerPalabra.innerHTML = "";
        $containerLetrasIncorrectas.innerHTML = "";
        $cartel.classList.add("dis-none");
        dibujarLineas();
        let input = document.querySelector(".input-letra");
        input.focus()
    }
  
}

function verificarCaracter(event) {
    if (!/^[A-ZÑ]*$/.test(event.target.value)) {
        alert('sólo mayúsculas');
        event.target.value = "";
    }
    else if (!palabraRandom.includes(event.target.value)) {
        if (!letrasIncorrectas.includes(event.target.value)) {
            letrasIncorrectas.push(event.target.value);
            let span = document.createElement("span");
            span.textContent = event.target.value;
            $containerLetrasIncorrectas.append(span);
            dibujarMunieco()
            event.target.value = "";
            munieco[contadorError]
            contadorError++;
        } else {
            event.target.value = "";
        }
    } else {
        if (!letrasCorrectas.includes(event.target.value)) {
            letrasCorrectas.push(event.target.value)
            let posicionLetra = [];
            for (let i = 0; i < palabraRandom.length; i++) {
                if (palabraRandom[i] === event.target.value) {
                    posicionLetra.push(i)
                }
            }
            for (let j = 0; j < posicionLetra.length; j++) {

                $containerPalabra.children[posicionLetra[j]].textContent = event.target.value;
                contadorAciertos++
            }
            event.target.value = "";
        } else {
            event.target.value = "";
        }
    }
    verificarEstado()
}

function verificarEstado() {
    if (contadorAciertos == palabraRandom.length) {
        $cartel.classList.remove("dis-none");
        $cartel.classList.remove("red");
        $cartel.classList.add("green");
        $cartel.textContent = "Ganaste, felicidades!";
        let input = document.querySelector(".input-letra");
        input.setAttribute("disabled", "true");
        contadorError = 0;
        contadorAciertos = -1;
    }
    if (contadorError == munieco.length) {
        $cartel.classList.remove("dis-none");
        $cartel.classList.remove("green");
        $cartel.classList.add("red");
        $cartel.textContent = "Fin del juego!";
        let input = document.querySelector(".input-letra");
        input.setAttribute("disabled", "true");
        contadorError = 0;
        contadorAciertos = -1;
    }

}













