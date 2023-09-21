// JavaScript para mostrar una imagen que aparece lentamente desde una sombra
const imagen = document.getElementById('imagen');

function aparecerImagen() {
    imagen.style.opacity = 0.2; // Cambia la opacidad para mostrar la imagen gradualmente
}

setTimeout(aparecerImagen, 1000); // Espera 2 segundos antes de mostrar la imagen

