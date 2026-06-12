// ======================
// DATOS DEL ESTUDIANTE
// ======================

const nombreUsuario =
localStorage.getItem("nombreUsuario") || "Estudiante";

const avatarUsuario =
localStorage.getItem("avatarUsuario") || "img/avatar1.png.avif";

document.addEventListener("DOMContentLoaded", () => {

    const nombreEl = document.getElementById("nombre");
    const avatarEl = document.getElementById("avatar");
    const puntajeEl = document.getElementById("puntaje");

    if(nombreEl){
        nombreEl.textContent = "Hola " + nombreUsuario + " 👋";
    }

    if(avatarEl){
        avatarEl.src = avatarUsuario;
    }

    if(puntajeEl){
        puntajeEl.textContent =
        "⭐ Puntaje: " + puntaje;
    }

    document.addEventListener(
        "click",
        hablarInstruccionInicial,
        { once:true }
    );

});

// ======================
// PUNTAJE
// ======================

let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

let respuestaUsuario = "";

// ======================
// AUDIO
// ======================

function hablar(texto){

    if("speechSynthesis" in window){

        speechSynthesis.cancel();

        const voz =
        new SpeechSynthesisUtterance(texto);

        voz.lang = "es-ES";

        speechSynthesis.speak(voz);
    }
}

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

    const zona =
    document.getElementById("zonaRespuesta");

    zona.innerHTML = `
        <div class="zona-contenido">
            <img src="img/cofre.png" class="cofre-img">
            <div class="numero-colocado">${numero}</div>
        </div>
    `;
}

// ======================
// VERIFICAR
// ======================

function verificarRespuesta(){

    const mensaje =
    document.getElementById("mensaje");

    if(respuestaUsuario === ""){

        mensaje.innerHTML =
        "⚠️ Primero arrastra un número";

        mensaje.style.color = "#f59e0b";

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

        mensaje.innerHTML =
        "🎉 ¡Correcto! Encontraste el número mayor";

        mensaje.style.color =
        "#10b981";

        hablar(
        "Muy bien. Has encontrado el número mayor"
        );

        confetti({
            particleCount:200,
            spread:120,
            origin:{y:0.6}
        });

        document.getElementById(
        "btnSiguiente"
        ).style.display =
        "inline-block";

    }else{

        mensaje.innerHTML =
        "❌ Incorrecto. Inténtalo nuevamente";

        mensaje.style.color =
        "#ef4444";

        hablar(
        "Inténtalo nuevamente"
        );
    }
}

// ======================
// AUDIO INICIAL
// ======================

let haHabladoInicial = false;

function hablarInstruccionInicial(){

    if(!haHabladoInicial){

        hablar(
        "Arrastra el número mayor al cofre y luego presiona verificar respuesta"
        );

        haHabladoInicial = true;
    }
}
