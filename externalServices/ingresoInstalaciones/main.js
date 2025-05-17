// Función unificada para actualizar fecha y hora
function updateDateTime() {
    const now = new Date();
    
    // Actualizar hora
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('current-time').textContent = `${hours}:${minutes}`;
    
    // Actualizar fecha
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('es-MX', options);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar inmediatamente
    updateDateTime();
    // Actualizar cada minuto (60000 ms)
    setInterval(updateDateTime, 60000);
});






// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Función para mostrar u ocultar los campos de otra identificación
function toggleOtraIdentificacion() {
  const select = document.getElementById('identificacion');
  const otraDiv = document.getElementById('otraIdentificacionDiv');
  const otraInput = document.getElementById('otraIdentificacion');
  
  if (select.value === 'otra') {
    otraDiv.classList.remove('d-none');
    otraInput.required = true;
  } else {
    otraDiv.classList.add('d-none');
    otraInput.required = false;
  }
}

// Función para mostrar u ocultar los campos de equipo de cómputo
function toggleEquipoFields() {
  const checkbox = document.getElementById('traeEquipo');
  const marcaDiv = document.getElementById('marcaEquipoDiv');
  const serieDiv = document.getElementById('serieEquipoDiv');
  const marcaInput = document.getElementById('marcaEquipo');
  const serieInput = document.getElementById('serieEquipo');

  if (checkbox.checked) {
    marcaDiv.classList.remove('d-none');
    serieDiv.classList.remove('d-none');
    marcaInput.required = true;
    serieInput.required = true;
  } else {
    marcaDiv.classList.add('d-none');
    serieDiv.classList.add('d-none');
    marcaInput.required = false;
    serieInput.required = false;
  }
}

// Función para mostrar u ocultar los campos de otra marca
function toggleOtraMarca() {
  const select = document.getElementById('marcaEquipo');
  const otraDiv = document.getElementById('otraMarcaDiv');
  const otraInput = document.getElementById('otraMarca');
  
  if (select.value === 'otra') {
    otraDiv.classList.remove('d-none');
    otraInput.required = true;
  } else {
    otraDiv.classList.add('d-none');
    otraInput.required = false;
  }
}
      