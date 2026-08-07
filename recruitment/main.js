/**
 * Encuesta de satisfacción del proceso de Reclutamiento - FFT México
 * Validación e interacción del formulario
 */

document.addEventListener('DOMContentLoaded', function () {
  initializeTooltips();
  initializeSurveyForm();
});

/**
 * Inicializa los tooltips de Bootstrap
 */
function initializeTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

/**
 * Captura el envío, valida y muestra el mensaje de agradecimiento
 */
function initializeSurveyForm() {
  const form = document.getElementById('encuestaReclutamiento');
  const thankYou = document.getElementById('agradecimiento');

  if (!form || !thankYou) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) {
        const questionCard = firstInvalid.closest('.question-card');
        (questionCard || firstInvalid).scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus({ preventScroll: true });
      }
      return;
    }

    form.classList.add('was-validated');
    form.classList.add('d-none');
    thankYou.classList.remove('d-none');
    thankYou.scrollIntoView({ behavior: 'smooth', block: 'start' });
    thankYou.focus({ preventScroll: true });
  });
}
