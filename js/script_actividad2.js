// ======================
// DATOS DEL ESTUDIANTE
// ======================

const nombreUsuario =
localStorage.getItem("nombreUsuario") || "Estudiante";

const avatarUsuario =
localStorage.getItem("avatarUsuario") || "img/avatar1.png";

document.getElementById("nombre").textContent =
"Hola " + nombreUsuario + " 👋";

document.getElementById("avatar").src =
avatarUsuario;

// ======================
// PUNTAJE
// ======================

let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

document.getElementById("puntaje").textContent =
"⭐ Puntaje: " + puntaje;

let respuestaUsuario = "";

// ======================
// AUDIO
// ======================

function hablar(texto){

    speechSynthesis.cancel();

    const voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

// ======================
// LEER NÚMERO
// ======================

function leerNumero(numero){

    hablar(numero);

}

// ======================
// DRAG & DROP
// ======================

function allowDrop(ev){

    ev.preventDefault();

}

function drag(ev){

    ev.dataTransfer.setData(
        "text",
        ev.target.id
    );

}

function drop(ev){

    ev.preventDefault();

    const numero =
    ev.dataTransfer.getData("text");

    respuestaUsuario = numero;

    document.getElementById("zonaRespuesta")
    .innerHTML = "🏆 " + numero;

}

// ======================
// VERIFICAR RESPUESTA
// ======================

function verificarRespuesta(){

    const mensaje =
    document.getElementById("mensaje");

    if(respuestaUsuario === ""){

        mensaje.textContent =
        "⚠️ Primero arrastra un número.";

        mensaje.style.color =
        "orange";

        hablar(
        "Debes arrastrar un número"
        );

        return;

    }

    if(respuestaUsuario === "4521"){

        puntaje += 20;

        localStorage.setItem(
            "puntaje",
            puntaje
        );

        document.getElementById("puntaje")
        .textContent =
        "⭐ Puntaje: " + puntaje;

        mensaje.textContent =
        "🎉 ¡Correcto! Encontraste el número mayor.";

        mensaje.style.color =
        "#22c55e";

        hablar(
        "Muy bien. Has encontrado el número mayor"
        );

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        document.getElementById(
        "btnSiguiente"
        ).style.display =
        "inline-block";

    }else{

        mensaje.textContent =
        "❌ Incorrecto. Inténtalo nuevamente.";

        mensaje.style.color =
        "#ef4444";

        hablar(
        "Inténtalo nuevamente"
        );

    }

}

// ======================
// MENSAJE INICIAL
// ======================

window.onload = function(){

    setTimeout(() => {

        hablar(
        "Arrastra el número mayor al cofre y luego presiona verificar respuesta"
        );

    }, 1000);

};
