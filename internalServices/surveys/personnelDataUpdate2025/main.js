/* Inicializacion de los tooltips */
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })


/* Script: información academica */
    document.addEventListener("DOMContentLoaded", function () {
    const grado = document.getElementById("gradoAcademico");
    const especialidadContainer = document.getElementById("especialidad-container");
    const institucionContainer = document.getElementById("institucion-container");
    const estatus = document.getElementById("estatusDeEstudios");
    const anioContainer = document.getElementById("anio-container");

    // Mostrar campo de especialidad si es Técnico, Licenciatura o superior
    grado.addEventListener("change", function () {
        const necesitaEspecialidad = ["Técnico", "Licenciatura", "Maestría", "Doctorado", "Otro"];
        const necesitaInstitucion = ["Técnico", "Licenciatura", "Maestría", "Doctorado"];

        especialidadContainer.classList.toggle("d-none", !necesitaEspecialidad.includes(grado.value));
        institucionContainer.classList.toggle("d-none", !necesitaInstitucion.includes(grado.value));
        });

    // Mostrar Año de Finalización si es "Concluido" o "En curso"
    estatus.addEventListener("change", function () {
        anioContainer.classList.toggle("d-none", estatus.value === "");
        });
    });




/* Script: Mostrar los campos "información de los hijos" */
    function mostrarCamposHijos(cantidad) {
        // Ocultar todos los campos primero y quitar required
        for (let i = 1; i <= 10; i++) {
            const campoHijo = document.getElementById(`hijo${i}`);
            if (campoHijo) {
                campoHijo.classList.add('d-none');
                // Obtener todos los inputs dentro del contenedor del hijo
                const inputs = campoHijo.querySelectorAll('input, select');
                inputs.forEach(input => {
                    input.removeAttribute('required');
                });
            }
        }
        
        // Mostrar solo la cantidad seleccionada y hacer required
        for (let i = 1; i <= cantidad; i++) {
            const campoHijo = document.getElementById(`hijo${i}`);
            if (campoHijo) {
                campoHijo.classList.remove('d-none');
                // Obtener todos los inputs dentro del contenedor del hijo
                const inputs = campoHijo.querySelectorAll('input, select');
                inputs.forEach(input => {
                    input.setAttribute('required', '');
                });
            }
        }
    }


/* Script: Documentos de viaje */
    document.addEventListener("DOMContentLoaded", function () {
        const pasaporteSi = document.getElementById("pasaporte_si");
        const pasaporteNo = document.getElementById("pasaporte_no");
        const pasaporteUpload = document.getElementById("pasaporte_upload");
        const archivoPasaporte = document.getElementById("archivo_pasaporte");

        const visaSi = document.getElementById("visa_si");
        const visaNo = document.getElementById("visa_no");
        const visaUpload = document.getElementById("visa_upload");
        const archivoVisa = document.getElementById("archivo_visa");

        // Mostrar/ocultar carga de pasaporte
        pasaporteSi.addEventListener("change", function () {
            pasaporteUpload.classList.remove("d-none");
            archivoPasaporte.setAttribute("required", "");
        });

        pasaporteNo.addEventListener("change", function () {
            pasaporteUpload.classList.add("d-none");
            archivoPasaporte.removeAttribute("required");
        });

        // Mostrar/ocultar carga de visa
        visaSi.addEventListener("change", function () {
            visaUpload.classList.remove("d-none");
            archivoVisa.setAttribute("required", "");
        });

        visaNo.addEventListener("change", function () {
            visaUpload.classList.add("d-none");
            archivoVisa.removeAttribute("required");
        });
    });