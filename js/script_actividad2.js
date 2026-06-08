alert("JS cargado correctamente")
;let puntaje =
parseInt(localStorage.getItem("puntaje")) || 0;

// AUDIO

function hablar(texto){

    speechSynthesis.cancel();

    let voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

// LEER NÚMERO

function leerNumero(numero){

    hablar(numero);
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

    if(numero === "4521"){

        puntaje += 20;

        localStorage.setItem(
            "puntaje",
            puntaje
        );

        document.getElementById("mensaje")
        .innerHTML =
        "🎉 ¡Correcto!";

        document.getElementById("mensaje")
        .style.color = "green";

        hablar("Muy bien");

        confetti({
            particleCount:200,
            spread:120
        });

        document.getElementById("btnSiguiente")
        .style.display = "inline-block";

        ev.target.innerHTML =
        "🏆 4521";

    }else{

        document.getElementById("mensaje")
        .innerHTML =
        "❌ Inténtalo nuevamente";

        document.getElementById("mensaje")
        .style.color = "red";

        hablar("Inténtalo nuevamente");
    }
}

// MENSAJE INICIAL

hablar(
"Arrastra el número mayor al cofre"
);
