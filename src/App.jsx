import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Inspecciones from "./pages/Inspecciones.jsx";
import Reportes from "./pages/Reportes.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inspecciones" element={<Inspecciones />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Layout>
  );
}

export default App;