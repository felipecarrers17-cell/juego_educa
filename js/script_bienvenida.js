  // Obtener datos guardados
        let nombre = localStorage.getItem("nombreUsuario");
        let avatar = localStorage.getItem("avatarUsuario");

        // Mostrar saludo
        document.getElementById("saludo").innerText =
            "Bienvenido " + nombre;

        // Mostrar avatar
        document.getElementById("avatar").src = avatar;

        // Ir al juego 1
        function irJuego1(){
            window.location.href = "juego1.html";
        }