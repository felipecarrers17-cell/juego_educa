let avatarSeleccionado = "";

// ======================
// SELECCIONAR AVATAR
// ======================

function seleccionarAvatar(img){

    avatarSeleccionado = img.src;

    let avatars =
    document.querySelectorAll(".avatars img");

    avatars.forEach(a=>{
        a.style.border =
        "3px solid transparent";
    });

    img.style.border =
    "4px solid #00ff00";

    hablar("Avatar seleccionado");

    console.log(
        "Avatar:",
        avatarSeleccionado
    );
}

// ======================
// VOZ
// ======================

function hablar(texto){

    const mensaje =
    new SpeechSynthesisUtterance(texto);

    mensaje.lang = "es-ES";

    speechSynthesis.speak(mensaje);
}

// ======================
// INGRESAR
// ======================

function ingresar(){

    let nombre =
    document.getElementById("nombre").value;

    let audio =
    document.getElementById("sonidoClick");

    if(audio){

        audio.currentTime = 0;

        audio.play()
        .catch(error=>{
            console.log(error);
        });

    }

    if(nombre.trim() === ""){

        hablar(
        "Debes ingresar tu nombre"
        );

        alert(
        "Debes ingresar tu nombre"
        );

        return;
    }

    if(avatarSeleccionado === ""){

        hablar(
        "Debes seleccionar un avatar"
        );

        alert(
        "Debes seleccionar un avatar"
        );

        return;
    }

    localStorage.setItem(
        "nombreUsuario",
        nombre
    );

    localStorage.setItem(
        "avatarUsuario",
        avatarSeleccionado
    );

    console.log(
        "Nombre guardado:",
        nombre
    );

    hablar(
    "Bienvenido " + nombre
    );

    setTimeout(()=>{

        window.location.href =
        "bienvenida.html";

    },1000);

}

// ======================
// CARGA INICIAL
// ======================

window.onload = function(){

    hablar(
    "Bienvenido. Ingresa tu nombre y selecciona un avatar."
    );

};
