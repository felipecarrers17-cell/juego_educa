// ======================
// DATOS ESTUDIANTE
// ======================

let nombre =
localStorage.getItem("nombreUsuario") || "Estudiante";

let avatar =
localStorage.getItem("avatarUsuario") || "";

document.getElementById("nombre").innerHTML =
"Hola " + nombre + " 👋";

document.getElementById("avatar").src =
avatar;

// ======================
// PUNTAJE
// ======================

let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

let respuestaUsuario = "";

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

// ======================
// AUDIO
// ======================

function hablar(texto){

    speechSynthesis.cancel();

    let voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

// ======================
// LEER NÚMEROS
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

    let numero =
    ev.dataTransfer.getData("text");

    respuestaUsuario = numero;

    document.getElementById("zonaRespuesta")
    .innerHTML =
    "🏆 " + numero;

}

// ======================
// VERIFICAR RESPUESTA
// ======================

function verificarRespuesta(){

    if(respuestaUsuario === ""){

        hablar("Debes arrastrar un número");

        document.getElementById("mensaje")
        .innerHTML =
        "⚠️ Primero arrastra un número.";

        document.getElementById("mensaje")
        .style.color = "orange";

        return;

    }

    if(respuestaUsuario === "4521"){

        puntaje += 20;

        localStorage.setItem(
            "puntaje",
            puntaje
        );

        document.getElementById("puntaje")
        .innerHTML =
        "⭐ Puntaje: " + puntaje;

        document.getElementById("mensaje")
        .innerHTML =
        "🎉 ¡Correcto! Encontraste el número mayor.";

        document.getElementById("mensaje")
        .style.color = "green";

        hablar("Muy bien");

        confetti({
            particleCount:200,
            spread:120
        });

        document.getElementById("btnSiguiente")
        .style.display =
        "inline-block";

    }else{

        document.getElementById("mensaje")
        .innerHTML =
        "❌ Incorrecto. Inténtalo nuevamente.";

        document.getElementById("mensaje")
        .style.color = "red";

        hablar("Inténtalo nuevamente");

    }

}

// ======================
// MENSAJE INICIAL
// ======================

window.onload = function(){

    document.body.addEventListener(
        "click",
        function iniciarAudio(){

            hablar(
            "Arrastra el número mayor al cofre y luego presiona verificar respuesta"
            );

            document.body.removeEventListener(
                "click",
                iniciarAudio
            );

        }
    );

};
document.getElementById("nombre").innerHTML =
localStorage.getItem("nombreUsuario");

document.getElementById("avatar").src =
localStorage.getItem("avatarUsuario");
