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

function drop(ev){

ev.preventDefault();

let dato =
ev.dataTransfer.getData("text");

ev.target.innerHTML = dato;

respuestas[ev.target.id] = dato;

}

// VERIFICAR

function verificarRespuesta(){

if(
respuestas["um"]==="4" &&
respuestas["c"]==="5" &&
respuestas["d"]==="2" &&
respuestas["u"]==="1"
){

puntaje += 20;

localStorage.setItem(
"puntaje",
puntaje
);

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

document.getElementById("mensaje").innerHTML =
"🎉 ¡Correcto!";

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

window.onload = function(){

document.body.addEventListener(
"click",

function iniciarAudio(){

hablar(
"Completa la tabla posicional del número cuatro mil quinientos veintiuno"
);

document.body.removeEventListener(
"click",
iniciarAudio
);

});

};
