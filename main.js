const $buttonIniciar = document.getElementById("button_iniciar");
const $buttonAgregar = document.getElementById("button_agregar");
const $containerMunieco = document.querySelector("canvas");
const pincel = $containerMunieco.getContext("2d");
const $inicio = document.querySelector(".inicio");
const $juego = document.querySelector(".juego");
const $agregarPalabra = document.querySelector(".agregar-palabra");
const $buttonCancelar = document.querySelector("#cancelar");


function verificarCaracter(event) {
    if (!/^[A-Z]*$/.test(event.target.value)) {
        alert('sólo mayúsculas');
        event.target.value = "";
    }
}

$buttonIniciar.addEventListener("click",(e)=>{
    $inicio.classList.add("dis-none");
    $juego.classList.remove("dis-none");
})

$buttonAgregar.addEventListener("click",(e)=>{
    $inicio.classList.add("dis-none");
    $agregarPalabra.classList.remove("dis-none");
})

$buttonCancelar.addEventListener("click",(e)=>{
    $agregarPalabra.classList.add("dis-none");
    $inicio.classList.remove("dis-none");
})







//BASE 
pincel.beginPath();
pincel.moveTo(0, 320);
pincel.lineTo(300, 320);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//MASTIL
pincel.beginPath();
pincel.moveTo(55, 320);
pincel.lineTo(55, 5);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//MASTIL
pincel.beginPath();
pincel.moveTo(53, 5);
pincel.lineTo(227, 5);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//CUERDA
pincel.beginPath();
pincel.moveTo(225, 5);
pincel.lineTo(225, 50);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();

//CABEZA
pincel.beginPath();
pincel.arc(225, 75, 25, 0, 2 * 3.14);
pincel.strokeStyle = "#072b61";
pincel.stroke();
//cuerpo
pincel.beginPath();
pincel.moveTo(225, 100);
pincel.lineTo(225, 220);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//BRAZO
pincel.beginPath();
pincel.moveTo(225, 100);
pincel.lineTo(195, 150);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//brazo
pincel.beginPath();
pincel.moveTo(225, 100);
pincel.lineTo(255, 150);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//PIERNA
pincel.beginPath();
pincel.moveTo(225, 220);
pincel.lineTo(195, 270);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
//PIERNA
pincel.beginPath();
pincel.moveTo(225, 220);
pincel.lineTo(255, 270);
pincel.lineWidth = 4;
pincel.strokeStyle = "#072b61";
pincel.stroke();
