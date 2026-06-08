// DATOS

let nombre =
localStorage.getItem("nombreUsuario") || "Estudiante";

let puntaje =
localStorage.getItem("puntaje") || 0;

// MOSTRAR

document.getElementById("nombreAlumno")
.innerHTML = nombre;

document.getElementById("puntajeFinal")
.innerHTML =
"🏆 Puntaje obtenido: " +
puntaje +
" puntos";

// AUDIO

speechSynthesis.speak(
new SpeechSynthesisUtterance(
"Felicitaciones. Has completado todas las actividades."
)
);

// CONFETI

confetti({
particleCount:500,
spread:180
});

// REINICIAR

function reiniciar(){

localStorage.setItem("puntaje",0);

window.location.href =
"index.html";

}
