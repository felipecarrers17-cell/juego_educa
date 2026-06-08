let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

document.getElementById("puntaje").innerHTML =
"⭐ Puntaje: " + puntaje;

let respuestaUsuario = "";

// AUDIO

function hablar(texto){

speechSynthesis.cancel();

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

let simbolo =
ev.dataTransfer.getData("text");

respuestaUsuario = simbolo;

document.getElementById("respuesta")
.innerHTML = simbolo;

}

// VERIFICAR

function verificarRespuesta(){

if(respuestaUsuario === ">"){

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
"🎉 ¡Correcto!";

document.getElementById("mensaje")
.style.color = "green";

hablar("Excelente trabajo");

confetti({
particleCount:250,
spread:150
});

document.getElementById("btnFinal")
.style.display = "inline-block";

}
else{

document.getElementById("mensaje")
.innerHTML =
"❌ Inténtalo nuevamente";

document.getElementById("mensaje")
.style.color = "red";

hablar("Inténtalo nuevamente");

}

}

window.onload = function(){

document.body.addEventListener(
"click",

function iniciarAudio(){

hablar(
"Arrastra el símbolo correcto para comparar los números"
);

document.body.removeEventListener(
"click",
iniciarAudio
);

});

};
