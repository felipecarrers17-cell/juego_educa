// Obtener datos guardados
        let nombre = localStorage.getItem("nombreUsuario");
        let avatar = localStorage.getItem("avatarUsuario");

        // Mostrar saludo
        document.getElementById("saludo").innerText =
            "Bienvenido " + nombre;

        // Mostrar avatar
        document.getElementById("avatar").src = avatar;

        function irJuego1() {
            alert("Entrando al juego");
            window.location.href = "./juego1.html";
        }
        