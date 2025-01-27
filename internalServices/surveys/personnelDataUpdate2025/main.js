function generarCamposHijos(cantidad) {
    const contenedor = document.getElementById('contenedorHijos');
    contenedor.innerHTML = ''; // Limpiar contenedor

    for (let i = 0; i < cantidad; i++) {
        const hijoDiv = document.createElement('div');
        hijoDiv.className = 'hijo-info border p-3 mb-3';
        hijoDiv.innerHTML = `
            <h5>Información del Hijo ${i + 1}</h5>
            
            <!-- Nombre del Hijo -->
            <div class="mb-3">
                <label for="nombreHijo${i}" class="form-label">Nombre Completo <span style="color: red;">*</span></label>
                <input type="text" id="nombreHijo${i}" name="nombreHijo${i}" class="form-control" required>
            </div>

            <!-- Fecha de Nacimiento -->
            <div class="mb-3">
                <label for="fechaNacimientoHijo${i}" class="form-label">Fecha de Nacimiento <span style="color: red;">*</span></label>
                <input type="date" id="fechaNacimientoHijo${i}" name="fechaNacimientoHijo${i}" class="form-control" required>
            </div>

            <!-- Acta de Nacimiento -->
            <div class="mb-3">
                <label for="actaNacimientoHijo${i}" class="form-label">Acta de Nacimiento <span style="color: red;">*</span></label>
                <input type="file" id="actaNacimientoHijo${i}" name="actaNacimientoHijo${i}" class="form-control" accept=".pdf,.jpg,.png" required>
            </div>
        `;
        contenedor.appendChild(hijoDiv);
    }
} 