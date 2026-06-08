let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

let respuestaUsuario = "";

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

// AUDIO

function hablar(texto){

    speechSynthesis.cancel();

    let voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);

}

// LEER NÚMERO

function leerNumero(numero){

    hablar(numero);

}

// DRAG

function allowDrop(ev){

    ev.preventDefault();

}

function drag(ev){

    ev.dataTransfer.setData(
        "text",
        ev.target.id
    );

}

// DROP

function drop(ev){

    ev.preventDefault();

    let numero =
    ev.dataTransfer.getData("text");

    respuestaUsuario = numero;

    document.getElementById("zonaRespuesta")
    .innerHTML =
    "📦 " + numero;

}

// VERIFICAR

function verificarRespuesta(){

    if(respuestaUsuario === ""){

        document.getElementById("mensaje")
        .innerHTML =
        "⚠️ Primero arrastra un número.";

        document.getElementById("mensaje")
        .style.color = "orange";

        hablar("Primero arrastra un número");

        return;

    }

    if(respuestaUsuario === "6540"){

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
        "🎉 ¡Correcto! Encontraste el número menor.";

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

// MENSAJE INICIAL

window.onload = function(){

    document.body.addEventListener(
        "click",
        function iniciarAudio(){

            hablar(
            "Arrastra el número menor al cofre y luego presiona verificar respuesta"
            );

            document.body.removeEventListener(
                "click",
                iniciarAudio
            );

        }
    );

};
