import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const data = {
    labels: ["Femsa", "PH", "Otros Clientes"],
    datasets: [
      {
        label: "Inspecciones",
        data: [12, 19, 7],
        backgroundColor: ["#d62828", "#f77f00", "#fcbf49"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard Estadístico</h1>
      <div style={{ maxWidth: "500px", marginTop: "40px" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}

export default Dashboard;