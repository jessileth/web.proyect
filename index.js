// Función para mostrar un mensaje cuando se envía el formulario de búsqueda
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.querySelector('input[type="text"]').value;
    alert(`Buscando alojamientos en: ${searchTerm}`);
});

// Simulación de carga de alojamientos destacados (puede ser reemplazada con una llamada a una API real)
window.addEventListener('load', function() {
    const listingsContainer = document.querySelector('.featured-listings');

   

    // Mostrar alojamientos destacados en la página
    fakeListings.forEach(listing => {
        const listingElement = document.createElement('div');
        listingElement.classList.add('listing');

        listingElement.innerHTML = `
            <img src="${listing.image}" alt="${listing.name}">
            <h2>${listing.name}</h2>
            <p>${listing.description}</p>
            <a href="#">Ver Detalles</a>
        `;

        listingsContainer.appendChild(listingElement);
    });
});

//Reloj para obtener informacion mas detallada
function actualizarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const tiempoFormateado = `${agregarCero(horas)}:${agregarCero(minutos)}:${agregarCero(segundos)}`;

    // Actualizar el contenido de un elemento con el ID 'reloj'
    document.getElementById('reloj').innerText = tiempoFormateado;

    // Actualizar el reloj cada segundo
    setTimeout(actualizarReloj, 1000);
}

function agregarCero(valor) {
    return valor < 10 ? `0${valor}` : valor;
}


window.addEventListener('load', actualizarReloj);

//Accion para mostrar la ubicacion del lugar
document.querySelectorAll('.listing a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

    
        const locationUrl = this.getAttribute('data-location');

        // Abrir Google Maps en una nueva ventana o pestaña
        abrirGoogleMaps(locationUrl);
    });
});

function abrirGoogleMaps(locationUrl) {
    // Abre una nueva ventana o pestaña con Google Maps usando la URL de la ubicación
    window.open(locationUrl, '_blank');
}



