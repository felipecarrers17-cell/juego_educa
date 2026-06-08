let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

let respuestas = {};

// AUDIO

function hablar(texto){

let voz =
new SpeechSynthesisUtterance(texto);

voz.lang = "es-ES";

speechSynthesis.speak(voz);

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

ev.target.innerHTML = numero;

respuestas[ev.target.id] = numero;

}

// VERIFICAR

function verificarRespuesta(){

if(
respuestas["z1"]==="120" &&
respuestas["z2"]==="340" &&
respuestas["z3"]==="560" &&
respuestas["z4"]==="890"
){

puntaje += 20;

localStorage.setItem(
"puntaje",
puntaje
);

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

document.getElementById("mensaje").innerHTML =
"🎉 ¡Excelente!";

document.getElementById("mensaje").style.color =
"green";

hablar("Excelente trabajo");

confetti({
particleCount:200,
spread:120
});

document.getElementById("btnSiguiente")
.style.display = "inline-block";

}
else{

document.getElementById("mensaje").innerHTML =
"❌ Inténtalo nuevamente";

document.getElementById("mensaje").style.color =
"red";

hablar("Inténtalo nuevamente");

}

}

// MENSAJE INICIAL

window.onload = function(){

document.body.addEventListener(
"click",

function iniciarAudio(){

hablar(
"Ordena los números de menor a mayor"
);

document.body.removeEventListener(
"click",
iniciarAudio
);

});

};
