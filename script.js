// JavaScript para mostrar una imagen con efecto "fade in" más rápido
const imagen = document.getElementById('imagen');
const botonReproducir = document.getElementById('reproducir');
const cancion = document.getElementById('cancion');

function aparecerImagen() {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.02; // Ajusta el valor de incremento según la velocidad de desvanecimiento
            imagen.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval); // Detiene la animación cuando la opacidad llega a 1
        }
    }, 20); // Intervalo de tiempo más corto para una animación más rápida (en milisegundos)
}

// Agrega un evento clic al botón para iniciar la reproducción de la canción
botonReproducir.addEventListener('click', function () {
    cancion.play();
    botonReproducir.style.display = 'none'; // Oculta el botón después de hacer clic
});

// Esperar 0.5 segundos (500 milisegundos) antes de mostrar la imagen con efecto "fade in"
setTimeout(aparecerImagen, 500);

