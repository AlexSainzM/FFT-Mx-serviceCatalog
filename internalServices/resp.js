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
    ul.classList.add('list-unstyled', 'list-group-flush', 'mt-3', 'mb-4');

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