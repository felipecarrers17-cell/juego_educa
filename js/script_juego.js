// ============================
// DATOS DEL ESTUDIANTE
// ============================

let nombre = localStorage.getItem("nombreUsuario") || "Estudiante";
let avatar = localStorage.getItem("avatarUsuario") || "";

// ============================
// MOSTRAR DATOS
// ============================

document.getElementById("nombre").innerHTML =
"Hola " + nombre + " 👋";

document.getElementById("avatar").src = avatar;

// ============================
// CONTROL DE PANTALLAS
// ============================

let pantalla = 0;

// ============================
// CONTENIDO DE APRENDIZAJE
// ============================

const paginas = [

`
<div class="tarjeta">

    <h2>📚 Bienvenido al Reino de los Números</h2>

    <br>

    <p class="lista">
        Hoy aprenderás:
        <br><br>

        ✅ Comparar números
        <br>

        ✅ Identificar el número mayor
        <br>

        ✅ Identificar el número menor
        <br>

        ✅ Ordenar números hasta 10.000
    </p>

    <button onclick="siguiente()">
        🚀 Comenzar
    </button>

</div>
`,

`
<div class="tarjeta">

    <h2>🔍 ¿Qué significa comparar?</h2>

    <br>

    <div class="numero">3250</div>
    <div class="numero">4521</div>

    <p class="lista">

        3250 tiene 3 unidades de mil.
        <br>

        4521 tiene 4 unidades de mil.
        <br><br>

        Como 4 es mayor que 3,
        <br>

        4521 es el número mayor.

    </p>

    <button onclick="siguiente()">
        ➡️ Siguiente
    </button>

</div>
`,

`
<div class="tarjeta">

    <h2>📉 ¿Cómo saber cuál es menor?</h2>

    <br>

    <div class="numero">6540</div>
    <div class="numero">7800</div>

    <p class="lista">

        6540 tiene 6 unidades de mil.
        <br>

        7800 tiene 7 unidades de mil.
        <br><br>

        Como 6 es menor que 7,
        <br>

        6540 es el número menor.

    </p>

    <button onclick="siguiente()">
        ➡️ Siguiente
    </button>

</div>
`,

`
<div class="tarjeta">

    <h2>🧮 Tabla Posicional</h2>

    <br>

    <h2>4521</h2>

    <table class="tabla">

        <tr>
            <th>UM</th>
            <th>C</th>
            <th>D</th>
            <th>U</th>
        </tr>

        <tr>
            <td>4</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
        </tr>

    </table>

    <br>

    <p class="lista">

        UM = Unidad de Mil
        <br>

        C = Centena
        <br>

        D = Decena
        <br>

        U = Unidad

    </p>

    <button onclick="siguiente()">
        ➡️ Siguiente
    </button>

</div>
`,

`
<div class="tarjeta">

    <h2>📈 Ordenar números</h2>

    <br>

    <div class="numero">560</div>
    <div class="numero">120</div>
    <div class="numero">890</div>
    <div class="numero">340</div>

    <br><br>

    <div class="flecha">
        120 → 340 → 560 → 890
    </div>

    <br>

    <p class="lista">
        Para ordenar de menor a mayor,
        comenzamos por el número más pequeño.
    </p>

    <button onclick="siguiente()">
        ➡️ Siguiente
    </button>

</div>
`,

`
<div class="tarjeta">

    <h2>🎓 ¡Excelente!</h2>

    <br>

    <p class="lista">

        Ya aprendiste:

        <br><br>

        ✅ Número Mayor
        <br>

        ✅ Número Menor
        <br>

        ✅ Tabla Posicional
        <br>

        ✅ Ordenar Números

    </p>

    <br>

    <button onclick="irJuegos()">
        🎮 COMENZAR JUEGOS
    </button>

</div>
`

];

// ============================
// MOSTRAR PANTALLA
// ============================

function mostrarPantalla() {

    document.getElementById("contenido").innerHTML =
    paginas[pantalla];

    leerTexto();
}

// ============================
// SIGUIENTE
// ============================

function siguiente() {

    if (pantalla < paginas.length - 1) {
        pantalla++;
        mostrarPantalla();
    }
}

// ============================
// VOZ
// ============================

function leerTexto() {

    speechSynthesis.cancel();

    let texto =
    document.getElementById("contenido").innerText;

    let voz =
    new SpeechSynthesisUtterance(texto);

    voz.lang = "es-ES";

    speechSynthesis.speak(voz);
}

// ============================
// IR A JUEGO 1
// ============================

function irJuegos() {

    window.location.href = "actividad2.html";
}

// ============================
// INICIAR
// ============================

mostrarPantalla();
