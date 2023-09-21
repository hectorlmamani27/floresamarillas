// JavaScript para generar tulipanes amarillos de forma diseminada
function crearTulipan() {
    const tulipan = document.createElement('img');
    tulipan.src = 'imagen-tulipan.jpg'; // Reemplaza con la URL de tu imagen de tulipán
    tulipan.style.width = '50px'; // Ajusta el tamaño según tus preferencias
    tulipan.style.position = 'absolute';
    tulipan.style.top = `${Math.random() * window.innerHeight}px`;
    tulipan.style.left = `${Math.random() * window.innerWidth}px`;
    document.getElementById('tulipanes').appendChild(tulipan);
}

setInterval(crearTulipan, 2000); // Crea un tulipán cada 2 segundos
