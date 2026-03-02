import { useState, useEffect } from "react";
import { obtenerInspecciones } from "../utils/storage";

function AdminDashboard() {
  const [inspecciones, setInspecciones] = useState([]);
  const [filtroCliente, setFiltroCliente] = useState("");

  useEffect(() => {
    setInspecciones(obtenerInspecciones());
  }, []);

  const filtradas = inspecciones.filter((i) =>
    i.descripcion.toLowerCase().includes(filtroCliente.toLowerCase())
  );

  return (
    <div>
      <h1>Dashboard Administrador</h1>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Filtrar por cliente o tipo de inspección"
          value={filtroCliente}
          onChange={(e) => setFiltroCliente(e.target.value)}
          style={{ padding: "5px", width: "300px" }}
        />
      </div>

      {filtradas.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Fecha</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Descripción</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Foto</th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map((i, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{i.fecha}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{i.descripcion}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {i.foto && <img src={i.foto} alt="" style={{ width: "50px" }} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay inspecciones registradas.</p>
      )}
    </div>
  );
}

export default AdminDashboard;