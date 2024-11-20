const url = 'https://www.difusion-fft.com'; // Cambia por la URL que deseas inspeccionar

// Realiza una solicitud a la URL proporcionada
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al realizar la solicitud: ' + response.status);
    }
    return response.text();
  })
  .then(html => {
    // Crear un elemento temporal para analizar el HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Buscar todas las imágenes dentro de los elementos con clase 'carousel-item'
    const images = doc.querySelectorAll('.carousel-item img');
    
    // Crear un array para almacenar los valores src
    const srcValues = [];
    images.forEach(img => {
      if (img.src) {
        srcValues.push(img.src);
      }
    });

    // Mostrar los resultados en la consola
    console.log('Imágenes del carrusel:', srcValues);

    // Seleccionar el contenedor del carrusel
    const carouselInner = document.getElementById("carouselInner");

    // Iterar sobre las URLs y crear elementos dinámicamente
    srcValues.forEach((url, index) => {
      // Crear el elemento div para la clase 'carousel-item'
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      if (index === 0) {
        // Hacer el primer elemento activo
        carouselItem.classList.add("active");
      }

      // Crear la imagen y asignarle los atributos
      const img = document.createElement("img");
      img.src = url;
      img.classList.add("d-block", "w-100", "rounded-5");
      img.alt = "Carrusel Image";

      // Agregar la imagen al div y luego el div al carrusel
      carouselItem.appendChild(img);
      carouselInner.appendChild(carouselItem);
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
