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
    }, 10); // Intervalo de tiempo para la animación (en milisegundos)
}

setTimeout(aparecerImagen, 2000); // Espera 2 segundos antes de mostrar la imagen
