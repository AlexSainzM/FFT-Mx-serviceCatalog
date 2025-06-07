async function buscarUsuario() {
  const input = document.getElementById('userIdInput').value.trim();
  const resultado = document.getElementById('resultado');

  if (!input) {
    resultado.innerHTML = "<p>Por favor, ingresa un ID de usuario.</p>";
    return;
  }

  try {
    const response = await fetch('june.json');
    const data = await response.json();

    const usuario = data[input];

    if (!usuario) {
      resultado.innerHTML = "<p>No se encontró ningún usuario con ese ID.</p>";
      return;
    }

    // Enlaces con parámetros enviados
    const enlaceAmigos = `amigos.html?tipo=amigos&id=${encodeURIComponent(input)}`;
    const enlaceCumpleanero = `tarjeta.html?tipo=cumpleanero&id=${encodeURIComponent(input)}`;

    resultado.innerHTML = `
      <div class="usuario-info">
        <h3>${usuario.nombre}</h3>
        <p><strong>Fecha de nacimiento:</strong> ${usuario.fecha_nacimiento}</p>
        <p><strong>Centro de costo:</strong> ${usuario.centro_de_costo}</p>

        <div class="enlaces-tarjeta" style="margin-top:20px">
          <h4>🎁 Tarjeta de cumpleaños</h4>
          <a href="${enlaceAmigos}" class="btn-secondary" target="_blank">Compartir con amigos</a><br><br>
          <a href="${enlaceCumpleanero}" class="btn-primary" target="_blank">Ver tarjeta del cumpleañero</a>
        </div>
      </div>
    `;
  } catch (error) {
    resultado.innerHTML = "<p>Error al cargar el archivo de usuarios.</p>";
    console.error("Error al cargar june.json:", error);
  }
}
