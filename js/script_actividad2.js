// ======================
// ======================
// CARGAR DATOS USUARIO
// ======================

window.onload = function(){

    let nombre =
    localStorage.getItem("nombreUsuario") || "Estudiante";

    let avatar =
    localStorage.getItem("avatarUsuario") || "";

    document.getElementById("nombre").innerHTML =
    "Hola " + nombre + " 👋";

    if(avatar !== ""){
        document.getElementById("avatar").src = avatar;
    }

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
// ======================
// PUNTAJE
// ======================

let puntaje = parseInt(localStorage.getItem("puntaje")) || 0;
const puntajeEl = document.getElementById("puntaje");
if (puntajeEl) {
    puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
}

let respuestaUsuario = "";

// ======================
// AUDIO (SPEECH SYNTHESIS)
// ======================

function hablar(texto) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const voz = new SpeechSynthesisUtterance(texto);
        voz.lang = "es-ES";
        speechSynthesis.speak(voz);
    }
}

function leerNumero(numero) {
    hablar(numero);
}

// ======================
// DRAG & DROP
// ======================

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();

    let numero = ev.dataTransfer.getData("text");

    respuestaUsuario = numero;

    document.getElementById("zonaRespuesta").innerHTML = `
        <div class="zona-contenido">
            <img src="img/cofre.png" class="cofre-img">
            <div class="numero-colocado">${numero}</div>
        </div>
    `;
}

// ======================
// VERIFICAR RESPUESTA
// ======================

function verificarRespuesta() {
    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    if (respuestaUsuario === "") {
        mensaje.textContent = "⚠️ Primero arrastra un número.";
        mensaje.style.color = "#f59e0b";
        hablar("Debes arrastrar un número");
        return;
    }

    if (respuestaUsuario === "4521") {
        puntaje += 20;
        localStorage.setItem("puntaje", puntaje);
        
        if (puntajeEl) {
            puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
        }

        mensaje.textContent = "🎉 ¡Correcto! Encontraste el número mayor.";
        mensaje.style.color = "#10b981";
        hablar("Muy bien. Has encontrado el número mayor");

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        const btnSiguiente = document.getElementById("btnSiguiente");
        if (btnSiguiente) {
            btnSiguiente.style.display = "inline-block";
        }
    } else {
        mensaje.textContent = "❌ Incorrecto. Inténtalo nuevamente.";
        mensaje.style.color = "#ef4444";
        hablar("Inténtalo nuevamente");
    }
}

// ==========================================
// CONTROL DE AUDIO INICIAL (Autoplay Bypass)
// ==========================================

let haHabladoInicial = false;

function hablarInstruccionInicial() {
    if (!haHabladoInicial) {
        hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
        haHabladoInicial = true;
        document.removeEventListener("click", hablarInstruccionInicial);
        document.removeEventListener("touchstart", hablarInstruccionInicial);
    }
}

window.onload = function() {
    // Intenta reproducir automáticamente tras 1 segundo
    setTimeout(() => {
        if ('speechSynthesis' in window) {
            hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
            if (speechSynthesis.speaking) {
                haHabladoInicial = true;
            }
        }
    }, 1000);

    // Respaldo de seguridad al interactuar con la pantalla
    document.addEventListener("click", hablarInstruccionInicial);
    document.addEventListener("touchstart", hablarInstruccionInicial);
};// ======================
// DATOS DEL ESTUDIANTE
// ======================

const nombreUsuario = localStorage.getItem("nombreUsuario") || "Estudiante";
const avatarUsuario = localStorage.getItem("avatarUsuario") || "img/avatar1.png.avif";

const nombreEl = document.getElementById("nombre");
if (nombreEl) {
    nombreEl.textContent = "Hola " + nombreUsuario + " 👋";
}

const avatarEl = document.getElementById("avatar");
if (avatarEl) {
    avatarEl.src = avatarUsuario;
}

// ======================
// PUNTAJE
// ======================

let puntaje = parseInt(localStorage.getItem("puntaje")) || 0;
const puntajeEl = document.getElementById("puntaje");
if (puntajeEl) {
    puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
}

let respuestaUsuario = "";

// ======================
// AUDIO (SPEECH SYNTHESIS)
// ======================

function hablar(texto) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const voz = new SpeechSynthesisUtterance(texto);
        voz.lang = "es-ES";
        speechSynthesis.speak(voz);
    }
}

function leerNumero(numero) {
    hablar(numero);
}

// ======================
// DRAG & DROP
// ======================

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const numero = ev.dataTransfer.getData("text");
    respuestaUsuario = numero;

    const zonaEl = document.getElementById("zonaRespuesta");
    if (zonaEl) {
        zonaEl.innerHTML = `
            <div class="zona-contenido">
                <img src="img/cofre.png" alt="Cofre del tesoro" class="cofre-img cofre-abierto">
                <span class="numero-colocado">${numero}</span>
            </div>
        `;
    }
}

// ======================
// VERIFICAR RESPUESTA
// ======================

function verificarRespuesta() {
    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    if (respuestaUsuario === "") {
        mensaje.textContent = "⚠️ Primero arrastra un número.";
        mensaje.style.color = "#f59e0b";
        hablar("Debes arrastrar un número");
        return;
    }

    if (respuestaUsuario === "4521") {
        puntaje += 20;
        localStorage.setItem("puntaje", puntaje);
        
        if (puntajeEl) {
            puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
        }

        mensaje.textContent = "🎉 ¡Correcto! Encontraste el número mayor.";
        mensaje.style.color = "#10b981";
        hablar("Muy bien. Has encontrado el número mayor");

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        const btnSiguiente = document.getElementById("btnSiguiente");
        if (btnSiguiente) {
            btnSiguiente.style.display = "inline-block";
        }
    } else {
        mensaje.textContent = "❌ Incorrecto. Inténtalo nuevamente.";
        mensaje.style.color = "#ef4444";
        hablar("Inténtalo nuevamente");
    }
}

// ==========================================
// CONTROL DE AUDIO INICIAL (Autoplay Bypass)
// ==========================================

let haHabladoInicial = false;

function hablarInstruccionInicial() {
    if (!haHabladoInicial) {
        hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
        haHabladoInicial = true;
        document.removeEventListener("click", hablarInstruccionInicial);
        document.removeEventListener("touchstart", hablarInstruccionInicial);
    }
}

window.onload = function() {
    // Intenta reproducir automáticamente tras 1 segundo
    setTimeout(() => {
        if ('speechSynthesis' in window) {
            hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
            if (speechSynthesis.speaking) {
                haHabladoInicial = true;
            }
        }
    }, 1000);

    // Respaldo de seguridad al interactuar con la pantalla
    document.addEventListener("click", hablarInstruccionInicial);
    document.addEventListener("touchstart", hablarInstruccionInicial);
};// ======================
// DATOS DEL ESTUDIANTE
// ======================

const nombreUsuario = localStorage.getItem("nombreUsuario") || "Estudiante";
const avatarUsuario = localStorage.getItem("avatarUsuario") || "img/avatar1.png.avif";

const nombreEl = document.getElementById("nombre");
if (nombreEl) {
    nombreEl.textContent = "Hola " + nombreUsuario + " 👋";
}

const avatarEl = document.getElementById("avatar");
if (avatarEl) {
    avatarEl.src = avatarUsuario;
}

// ======================
// PUNTAJE
// ======================

let puntaje = parseInt(localStorage.getItem("puntaje")) || 0;
const puntajeEl = document.getElementById("puntaje");
if (puntajeEl) {
    puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
}

let respuestaUsuario = "";

// ======================
// AUDIO (SPEECH SYNTHESIS)
// ======================

function hablar(texto) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const voz = new SpeechSynthesisUtterance(texto);
        voz.lang = "es-ES";
        speechSynthesis.speak(voz);
    }
}

function leerNumero(numero) {
    hablar(numero);
}

// ======================
// DRAG & DROP
// ======================

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const numero = ev.dataTransfer.getData("text");
    respuestaUsuario = numero;

    const zonaEl = document.getElementById("zonaRespuesta");
    if (zonaEl) {
        zonaEl.innerHTML = `
            <div class="zona-contenido">
                <img src="img/cofre.png" alt="Cofre del tesoro" class="cofre-img cofre-abierto">
                <span class="numero-colocado">${numero}</span>
            </div>
        `;
    }
}

// ======================
// VERIFICAR RESPUESTA
// ======================

function verificarRespuesta() {
    const mensaje = document.getElementById("mensaje");
    if (!mensaje) return;

    if (respuestaUsuario === "") {
        mensaje.textContent = "⚠️ Primero arrastra un número.";
        mensaje.style.color = "#f59e0b";
        hablar("Debes arrastrar un número");
        return;
    }

    if (respuestaUsuario === "4521") {
        puntaje += 20;
        localStorage.setItem("puntaje", puntaje);
        
        if (puntajeEl) {
            puntajeEl.textContent = "⭐ Puntaje: " + puntaje;
        }

        mensaje.textContent = "🎉 ¡Correcto! Encontraste el número mayor.";
        mensaje.style.color = "#10b981";
        hablar("Muy bien. Has encontrado el número mayor");

        confetti({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 }
        });

        const btnSiguiente = document.getElementById("btnSiguiente");
        if (btnSiguiente) {
            btnSiguiente.style.display = "inline-block";
        }
    } else {
        mensaje.textContent = "❌ Incorrecto. Inténtalo nuevamente.";
        mensaje.style.color = "#ef4444";
        hablar("Inténtalo nuevamente");
    }
}

// ==========================================
// CONTROL DE AUDIO INICIAL (Autoplay Bypass)
// ==========================================

let haHabladoInicial = false;

function hablarInstruccionInicial() {
    if (!haHabladoInicial) {
        hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
        haHabladoInicial = true;
        document.removeEventListener("click", hablarInstruccionInicial);
        document.removeEventListener("touchstart", hablarInstruccionInicial);
    }
}

window.onload = function() {
    // Intenta reproducir automáticamente tras 1 segundo
    setTimeout(() => {
        if ('speechSynthesis' in window) {
            hablar("Arrastra el número mayor al cofre y luego presiona verificar respuesta");
            if (speechSynthesis.speaking) {
                haHabladoInicial = true;
            }
        }
    }, 1000);

    // Respaldo de seguridad al interactuar con la pantalla
    document.addEventListener("click", hablarInstruccionInicial);
    document.addEventListener("touchstart", hablarInstruccionInicial);
};
