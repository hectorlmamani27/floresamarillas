// JavaScript para mostrar una imagen con efecto "fade in"
const imagen = document.getElementById('imagen');

function aparecerImagen() {
    let opacity = 0;
    const fadeInInterval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.01; // Ajusta el valor de incremento según la velocidad de desvanecimiento
            imagen.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval); // Detiene la animación cuando la opacidad llega a 1
        }
    }, 20); // Intervalo de tiempo para la animación (en milisegundos)
}

// Reproducir la canción al iniciar la página
const cancion = document.getElementById('cancion');
cancion.play();

// Esperar 2 segundos antes de mostrar la imagen con efecto "fade in"
setTimeout(aparecerImagen, 500);

