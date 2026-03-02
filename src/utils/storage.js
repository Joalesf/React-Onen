export const guardarInspeccion = (inspeccion) => {
  // Obtener las inspecciones actuales de localStorage
  const inspecciones = JSON.parse(localStorage.getItem("inspecciones")) || [];
  inspecciones.push(inspeccion);
  localStorage.setItem("inspecciones", JSON.stringify(inspecciones));
};

export const obtenerInspecciones = () => {
  return JSON.parse(localStorage.getItem("inspecciones")) || [];
};