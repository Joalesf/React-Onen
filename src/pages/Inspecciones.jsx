import { useState, useEffect } from "react";
import { guardarInspeccion, obtenerInspecciones } from "../utils/storage";
import { subirInspeccion } from "../utils/api";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Inspecciones() {
  const [inspeccion, setInspeccion] = useState("");
  const [foto, setFoto] = useState(null);
  const [inspeccionesGuardadas, setInspeccionesGuardadas] = useState([]);

  useEffect(() => {
    setInspeccionesGuardadas(obtenerInspecciones());
  }, []);

  // Subir automáticamente todas las inspecciones pendientes
  useEffect(() => {
    const sincronizar = async () => {
      const pendientes = obtenerInspecciones();
      for (let i = 0; i < pendientes.length; i++) {
        try {
          await subirInspeccion(pendientes[i]);
          // Elimina la inspección subida
          const nuevas = obtenerInspecciones().filter((_, idx) => idx !== i);
          localStorage.setItem("inspecciones", JSON.stringify(nuevas));
          setInspeccionesGuardadas(nuevas);
        } catch {
          // No hay conexión, queda en localStorage
        }
      }
    };
    window.addEventListener("online", sincronizar); // cuando vuelva la conexión
    return () => window.removeEventListener("online", sincronizar);
  }, []);

  const handleFoto = (e) => {
    const file = e.target.files[0];
    setFoto(URL.createObjectURL(file));
  };

  const handleGuardar = () => {
    if (!inspeccion) return alert("Agrega descripción");

    const nueva = {
      descripcion: inspeccion,
      foto,
      fecha: new Date().toISOString(),
    };

    guardarInspeccion(nueva);
    setInspeccionesGuardadas(obtenerInspecciones());
    alert("Inspección guardada offline ✅");
    setInspeccion("");
    setFoto(null);
  };

  const generarPDF = () => {
    const input = document.getElementById("formulario-inspeccion");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10);
      pdf.save("inspeccion.pdf");
    });
  };

  return (
    <div>
      <h1>Registrar Inspección</h1>

      <div
        id="formulario-inspeccion"
        style={{ padding: "20px", backgroundColor: "#fff", maxWidth: "500px", marginTop: "20px" }}
      >
        <label>Descripción de inspección:</label>
        <textarea
          value={inspeccion}
          onChange={(e) => setInspeccion(e.target.value)}
          style={{ width: "100%", marginTop: "5px" }}
        />
        <label style={{ marginTop: "10px", display: "block" }}>Subir Foto:</label>
        <input type="file" accept="image/*" onChange={handleFoto} />
        {foto && <img src={foto} alt="Foto inspección" style={{ marginTop: "10px", width: "100%" }} />}
      </div>

      <button
        onClick={handleGuardar}
        style={{ marginTop: "20px", marginRight: "10px", padding: "10px 20px", backgroundColor: "#2a9d8f", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Guardar Offline
      </button>

      <button
        onClick={generarPDF}
        style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#d62828", color: "#fff", border: "none", cursor: "pointer" }}
      >
        Generar PDF
      </button>

      {inspeccionesGuardadas.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>Inspecciones guardadas:</h3>
          <ul>
            {inspeccionesGuardadas.map((i, index) => (
              <li key={index}>
                {i.fecha}: {i.descripcion} {i.foto && <img src={i.foto} alt="" style={{ width: "50px", marginLeft: "10px" }} />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Inspecciones;