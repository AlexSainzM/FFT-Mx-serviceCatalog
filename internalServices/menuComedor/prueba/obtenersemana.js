// Función para obtener la semana actual del año
function getCurrentWeek() {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1); // 1 de enero
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000; // Diferencia en días entre hoy y el 1 de enero

  // Calcular la semana actual (división de días entre 7, ajustando por el día inicial de la semana)
  const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

  return weekNumber;
}

console.log(getCurrentWeek()); // Imprime el número de semana actual
