import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "260px",
          backgroundColor: "white",
          borderRight: "1px solid #ddd",
          padding: "20px"
        }}
      >
        <h2 style={{ color: "#d62828" }}>ONEN</h2>
        <hr />
        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>Dashboard</Link>
          <Link to="/inspecciones" style={{ textDecoration: "none", color: "#333" }}>Inspecciones</Link>
          <Link to="/reportes" style={{ textDecoration: "none", color: "#333" }}>Reportes</Link>
          <Link to="/admin" style={{ textDecoration: "none", color: "#333" }}>Administrador</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "40px",
          backgroundColor: "#f8f9fa"
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default Layout;