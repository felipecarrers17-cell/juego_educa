let puntaje = 0;
let respuestaCorrecta = 0;
let ronda = 0;

const avatar = localStorage.getItem("avatarUsuario");
const nombre = localStorage.getItem("nombreUsuario");

document.getElementById("avatar").src = avatar;
document.getElementById("nombre").innerHTML = nombre;

function hablar(texto){
    let mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = "es-ES";
    speechSynthesis.speak(mensaje);
}

function generarRonda(){

    ronda++;

    document.getElementById("zonaJuego").innerHTML="";

    let numeros=[];

    for(let i=0;i<4;i++){

        numeros.push(
            Math.floor(Math.random()*9000)+1000
        );

    }

    respuestaCorrecta=Math.max(...numeros);

    document.getElementById("objetivo").innerHTML=
    respuestaCorrecta;

    hablar(
        "Encuentra el número " +
        respuestaCorrecta
    );

    numeros.forEach(numero=>{

        let div=document.createElement("div");

        div.className="numero";

        div.innerHTML=numero;

        div.style.left=
        Math.random()*750+"px";

        div.style.top=
        Math.random()*320+"px";

        div.onclick=()=>verificar(numero);

        document
        .getElementById("zonaJuego")
        .appendChild(div);

    });

}

function verificar(numero){

    if(numero===respuestaCorrecta){

        puntaje+=10;

        document.getElementById("puntaje")
        .innerHTML=
        "⭐ Puntaje: "+puntaje;

        document.getElementById("mensaje")
        .innerHTML=
        "🎉 Correcto";

        confetti({
            particleCount:100,
            spread:70
        });

        hablar("Muy bien");

        if(ronda>=5){

            document.getElementById("mensaje")
            .innerHTML=
            "🏆 Juego completado";

            document.getElementById("btnSiguiente")
            .style.display="inline-block";

            return;
        }

        setTimeout(
            generarRonda,
            1500
        );

    }else{

        document.getElementById("mensaje")
        .innerHTML=
        "❌ Intenta otra vez";

        hablar("Intenta nuevamente");

    }

}

generarRonda();
