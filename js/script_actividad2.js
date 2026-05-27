const items = document.querySelectorAll('.item');

const objetivos = document.querySelectorAll('.objetivo');

const mensaje = document.getElementById('mensaje');

let objetoArrastrado = null;

let correctos = 0;

let puntos = 0;

let errores = 0;

// Panel
const puntosTexto =
document.getElementById('puntos');

const correctosTexto =
document.getElementById('correctosTexto');

const erroresTexto =
document.getElementById('erroresTexto');

// Sonidos
const sonidoCorrecto = new Audio(
'https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3'
);

const sonidoError = new Audio(
'https://assets.mixkit.co/active_storage/sfx/2955/2955-preview.mp3'
);

// Voz
function hablar(texto){

    speechSynthesis.cancel();

    let voz = new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    voz.rate = 0.9;

    speechSynthesis.speak(voz);
}

// Hablar al entrar
window.onload = function(){

    hablar(
    'Arrastre los elementos al número correspondiente'
    );
};

// Arrastrar
items.forEach(item => {

    item.addEventListener('dragstart', () => {

        objetoArrastrado = item;
    });

});

// Objetivos
objetivos.forEach(objetivo => {

    objetivo.addEventListener('dragover', (e) => {

        e.preventDefault();
    });

    objetivo.addEventListener('drop', () => {

        const cantidadObjetivo =
        objetivo.dataset.cantidad;

        const cantidadItem =
        objetoArrastrado.dataset.cantidad;

        // Correcto
        if(cantidadObjetivo === cantidadItem){

            objetivo.innerHTML =
            objetoArrastrado.innerHTML;

            objetivo.style.fontSize = "22px";

            objetoArrastrado.style.display = 'none';

            mensaje.innerHTML =
            '✅ ¡Correcto!';

            mensaje.className = 'correcto';

            sonidoCorrecto.play();

            // Puntaje
            correctos++;

            puntos += 10;

            puntosTexto.innerHTML = puntos;

            correctosTexto.innerHTML =
            correctos;

            // Voz números
            if(cantidadObjetivo == 1){
                hablar("Número uno");
            }

            if(cantidadObjetivo == 2){
                hablar("Número dos");
            }

            if(cantidadObjetivo == 3){
                hablar("Número tres");
            }

            if(cantidadObjetivo == 4){
                hablar("Número cuatro");
            }

            if(cantidadObjetivo == 5){
                hablar("Número cinco");
            }

            // FINAL
            if(correctos === 5){

                setTimeout(() => {

                    mensaje.innerHTML =
                    '🎉 ¡Excelente trabajo!';

                    mensaje.className =
                    'correcto';

                    hablar(
                    'Felicitaciones completaste la actividad'
                    );

                    lanzarConfetti();

                    // Ir actividad3
                    setTimeout(() => {

                        window.location.href =
                        "actividad3.html";

                    }, 5000);

                }, 1000);
            }

        }else{

            mensaje.innerHTML =
            '❌ Intenta nuevamente';

            mensaje.className = 'error';

            sonidoError.play();

            errores++;

            erroresTexto.innerHTML =
            errores;

            hablar('Intenta nuevamente');
        }

    });

});

// Confetti
function lanzarConfetti(){

    confetti({

        particleCount: 250,

        spread: 120
    });
}