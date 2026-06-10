let avatarSeleccionado = "";

// Seleccionar avatar
function seleccionarAvatar(img) {
    avatarSeleccionado = img.src;

    let avatars = document.querySelectorAll('.avatars img');
    avatars.forEach(a => a.style.border = "2px solid transparent");

    img.style.border = "2px solid green";

    hablar("Avatar seleccionado");
}

// Voz
function hablar(texto) {
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    speechSynthesis.speak(mensaje);
}
console.log("Nombre guardado:", nombre);
alert(nombre);

localStorage.setItem("nombreUsuario", nombre);

console.log(
localStorage.getItem("nombreUsuario")
);
// Ingresar
document.getElementById("btnIngresar")
.addEventListener("click", ingresar);

    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log("Error audio:", e));
    }

    if (nombre.trim() === "") {
        hablar("Debes ingresar tu nombre");
        return;
    }

    if (avatarSeleccionado === "") {
        hablar("Debes seleccionar un avatar");
        return;
    }

    localStorage.setItem("nombreUsuario", nombre);
    localStorage.setItem("avatarUsuario", avatarSeleccionado);

    hablar("Bienvenido " + nombre);

    setTimeout(() => {
        window.location.href = "bienvenida.html";
    }, 1000);
}

// Carga inicial
window.onload = function () {
    hablar("Bienvenido. Por favor ingresa tu nombre y selecciona un avatar.");
};
