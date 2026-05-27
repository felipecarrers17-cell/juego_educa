const numeros = [
    {
        numero: 1,
        texto: "Uno"
    },
    {
        numero: 2,
        texto: "Dos"
    },
    {
        numero: 3,
        texto: "Tres"
    },
    {
        numero: 4,
        texto: "Cuatro"
    },
    {
        numero: 5,
        texto: "Cinco"
    }
];

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