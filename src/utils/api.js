export const subirInspeccion = async (inspeccion) => {
  try {
    // Aquí pones la URL de tu backend
    const response = await fetch("https://tu-backend.com/api/inspecciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inspeccion),
    });
    if (!response.ok) throw new Error("Error subiendo la inspección");
    return await response.json();
  } catch (error) {
    console.log("No se pudo subir la inspección:", error);
    throw error;
  }
};