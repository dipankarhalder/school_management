import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const StudentDpt = () => {
  const genderData = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Students by Gender",
        data: [900, 950, 50],
        backgroundColor: ["#36A2EB", "#FF6384", "#FF9F40"],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
            size: 12,
          },
        },
      },
      tooltip: {
        bodyFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
        titleFont: {
          family: "'AvenirNext', sans-serif",
          weight: 500,
        },
      },
    },
    layout: {
      padding: 10,
    },
    responsive: true,
  };

  return (
    <div className="app_doug_graph">
      <h3>Students by Gender</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "350px",
        }}
      >
        <Doughnut data={genderData} options={options} />
      </div>
    </div>
  );
};
