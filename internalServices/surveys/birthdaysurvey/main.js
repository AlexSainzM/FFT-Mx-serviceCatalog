// Obtener referencias a los elementos
const radioSi = document.getElementById('horarioSi');
const radioNo = document.getElementById('horarioNo');
const sugerenciaContainer = document.getElementById('sugerenciaHorarioContainer');

// Agregar event listeners a los radio buttons
radioSi.addEventListener('change', function() {
  sugerenciaContainer.style.display = 'none';
});

radioNo.addEventListener('change', function() {
  sugerenciaContainer.style.display = 'block';
});




// Para la pregunta de la tarjeta de cumpleaños
const tarjetaSi = document.getElementById('tarjetaSi');
const tarjetaNo = document.getElementById('tarjetaNo');
const opinionMensajeContainer = document.getElementById('opinionMensajeContainer');

tarjetaSi.addEventListener('change', function() {
  opinionMensajeContainer.style.display = 'block';
});

tarjetaNo.addEventListener('change', function() {
  opinionMensajeContainer.style.display = 'none';
});