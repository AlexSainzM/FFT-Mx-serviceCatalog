/**
 * Encuesta de satisfacción del proceso de Reclutamiento - FFT México
 * Validación y envío a Formspree
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
 * Valida el formulario y lo envía a Formspree vía fetch (AJAX)
 */
function initializeSurveyForm() {
  const form = document.getElementById('encuestaReclutamiento');
  const thankYou = document.getElementById('agradecimiento');
  const submitBtn = document.getElementById('submitBtn');
  const formError = document.getElementById('formError');
  const formErrorText = document.getElementById('formErrorText');

  if (!form || !thankYou || !submitBtn) {
    return;
  }

  const btnLabel = submitBtn.querySelector('.btn-label');
  const btnLoading = submitBtn.querySelector('.btn-loading');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    event.stopPropagation();

    hideFormError();

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

    if (!isFormspreeConfigured(form.action)) {
      showFormError(
        'Falta configurar el endpoint de Formspree. Reemplaza TU_FORM_ID en el atributo action del formulario.'
      );
      return;
    }

    form.classList.add('was-validated');
    setSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        showThankYou();
        return;
      }

      const data = await response.json().catch(function () {
        return null;
      });
      const message =
        (data && data.error) ||
        'No se pudo enviar la encuesta. Inténtalo de nuevo en unos minutos.';
      showFormError(message);
    } catch (error) {
      console.error('Error al enviar la encuesta a Formspree:', error);
      showFormError('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
    } finally {
      setSubmitting(false);
    }
  });

  function isFormspreeConfigured(actionUrl) {
    return Boolean(actionUrl) && !actionUrl.includes('TU_FORM_ID') && actionUrl.includes('formspree.io');
  }

  function setSubmitting(isSubmitting) {
    submitBtn.disabled = isSubmitting;
    submitBtn.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');

    if (btnLabel && btnLoading) {
      btnLabel.classList.toggle('d-none', isSubmitting);
      btnLoading.classList.toggle('d-none', !isSubmitting);
    }
  }

  function showThankYou() {
    form.classList.add('d-none');
    hideFormError();
    thankYou.classList.remove('d-none');
    thankYou.scrollIntoView({ behavior: 'smooth', block: 'start' });
    thankYou.focus({ preventScroll: true });
  }

  function showFormError(message) {
    if (!formError) {
      return;
    }

    if (formErrorText && message) {
      formErrorText.textContent = message;
    }

    formError.classList.remove('d-none');
    formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function hideFormError() {
    if (formError) {
      formError.classList.add('d-none');
    }
  }
}
