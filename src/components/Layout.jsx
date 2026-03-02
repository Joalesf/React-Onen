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
        <p style={{ cursor: "pointer" }}>Dashboard</p>
        <p style={{ cursor: "pointer" }}>Inspecciones</p>
        <p style={{ cursor: "pointer" }}>Reportes</p>
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