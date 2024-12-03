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




const url2 = 'https://difusion-fft.com/archivos/48'; // URL del sitio

// Realiza una solicitud a la URL proporcionada
fetch(url2)
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

    // Buscar todas las etiquetas <a> con el atributo href que contiene ".pdf"
    const pdfData = [];
    const items = doc.querySelectorAll('.col.bloq');
    items.forEach(item => {
      const anchor = item.querySelector('.thumb a[href*=".pdf"]');
      const title = item.querySelector('.title')?.textContent.trim();
      if (anchor && title) {
        const href = anchor.getAttribute('href');
        const pdfUrl = new URL(href).searchParams.get('path');
        if (pdfUrl && pdfUrl.endsWith('.pdf')) {
          pdfData.push({ title, href });
        }
      }
    });

    // Seleccionar el contenedor donde se insertará la lista
    const container = document.getElementById('pdf-list-container');

    // Crear la lista <ul>
    const ul = document.createElement('ul');

    // Agregar las clases necesarias al <ul>
    ul.classList.add('list-group', 'list-group-flush', 'list-group-numbered');

    pdfData.forEach(({ title, href }) => {
      // Crear el elemento <li>
      const li = document.createElement('li');
      
      // Agregar la clase necesaria al <li>
      li.classList.add('list-group-item');
      
      // Crear el elemento <a>
      const a = document.createElement('a');
      a.href = href;
      a.textContent = title;
      a.target = '_blank'; // Abrir en una nueva pestaña
      
      // Añadir el enlace al <li>
      li.appendChild(a);
      
      // Añadir el <li> al <ul>
      ul.appendChild(li);
    });

    // Insertar la lista en el contenedor
    container.appendChild(ul);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

