et puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

function hablar(texto){

speechSynthesis.cancel();

let voz =
new SpeechSynthesisUtterance(texto);

voz.lang = "es-ES";

speechSynthesis.speak(voz);

}

function leerNumero(numero){

hablar(numero);

}

function allowDrop(ev){

ev.preventDefault();

}

function drag(ev){

ev.dataTransfer.setData("text",
ev.target.id);

}

function drop(ev){

ev.preventDefault();

let dato =
ev.dataTransfer.getData("text");

if(dato === "4521"){

puntaje += 20;

localStorage.setItem(
"puntaje",
puntaje
);

ev.target.innerHTML =
"🏆 4521";

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

document.getElementById("siguiente")
.style.display = "inline-block";

}else{

document.getElementById("mensaje")
.innerHTML =
"❌ Inténtalo nuevamente.";

document.getElementById("mensaje")
.style.color = "red";

hablar("Inténtalo nuevamente");

}

}

hablar(
"Arrastra el número mayor al cofre"
);
