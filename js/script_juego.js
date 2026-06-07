body{
    font-family:Arial,sans-serif;
    text-align:center;
    background:linear-gradient(to bottom,#87CEEB,#ffffff);
    margin:0;
    padding:20px;
}

h1{
    color:#ff5722;
}

h2{
    color:#333;
}

.contenedor{
    max-width:1000px;
    margin:auto;
}

.numero{
    width:180px;
    height:120px;
    background:#4fc3f7;
    color:white;
    font-size:45px;
    font-weight:bold;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:grab;
    margin:20px;
}

.numeros{
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
}

.zona{
    width:300px;
    height:180px;
    margin:30px auto;
    border:4px dashed #ff9800;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:30px;
    background:#fff3e0;
}

#mensaje{
    font-size:28px;
    font-weight:bold;
    margin-top:20px;
}

button{
    padding:15px 30px;
    border:none;
    border-radius:15px;
    background:#4CAF50;
    color:white;
    font-size:20px;
    cursor:pointer;
    display:none;
}

button:hover{
    transform:scale(1.05);

let indice = 0;
let puntos = 0;

const numero = document.getElementById("numero");
const nombreObjeto = document.getElementById("nombreObjeto");
const imagenObjeto = document.getElementById("imagenObjeto");
const puntosTexto = document.getElementById("puntos");

mostrarNumero();

function mostrarNumero() {

    let actual = numeros[indice];

    numero.innerHTML = actual.numero;

    nombreObjeto.innerHTML =
    "Aprendiendo el número " + actual.numero;

    // Mantiene tu imagen original
    imagenObjeto.src =
    "https://cdn-icons-png.flaticon.com/512/616/616494.png";

    escucharNumero();
}

function escucharNumero() {

    let actual = numeros[indice];

    let mensaje = new SpeechSynthesisUtterance(
        actual.texto
    );

    mensaje.lang = "es-ES";

    speechSynthesis.speak(mensaje);
}

function siguienteNumero() {

    puntos++;

    puntosTexto.innerHTML = puntos;

    indice++;

    if(indice < numeros.length) {

        mostrarNumero();

    } else {

        finalizarJuego();
    }
}

function finalizarJuego() {

    document.getElementById("resultado").innerHTML =
    `
    <h2>🎉 ¡Aprendiste a contar del 1 al 5! 🎉</h2>
    `;

    let audio = document.getElementById("audioLogro");
    audio.play();

    confetti({
        particleCount: 200,
        spread: 100
    });

    hablarFelicitacion();

    document.getElementById("btnAprenderMas").style.display =
    "inline-block";
}

function hablarFelicitacion() {

    let mensaje = new SpeechSynthesisUtterance(
        "Felicitaciones aprendiste a contar del uno al cinco"
    );

    mensaje.lang = "es-ES";

    speechSynthesis.speak(mensaje);
}

function irANuevaPagina() {

    window.location.href = "actividad2.html";
}
