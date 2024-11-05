//Mostrar el campo "otro" de la primera pregunta -- comoConocioFFT
function FnComoConocioFFTOther(selectElement) {
  const otroInputContainer = document.getElementById('comoConocioFFTOtroBox');
  if (selectElement.value === 'otro') {
    otroInputContainer.style.display = 'block';
  } else {
    otroInputContainer.style.display = 'none';
  }
}

// Mostrar el campo de texto "otro" de la 3ra pregunta
document.getElementById('otroAtributoPositivoChecked').addEventListener('change', function() {
  const otroAtributoInput1 = document.getElementById('otroAtributoValoradoInput');
  otroAtributoInput1.style.display = this.checked ? 'block' : 'none';
});

// Mostrar el campo de texto "otro" de la 3ra pregunta
document.getElementById('atributosMenosValoradoOTRO').addEventListener('change', function() {
  const otroAtributoInput2 = document.getElementById('otroAtributoNoValoradoInput');
  otroAtributoInput2.style.display = this.checked ? 'block' : 'none';
});
