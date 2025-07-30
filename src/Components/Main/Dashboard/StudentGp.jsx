import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const StudentGp = () => {
  const departmentData = {
    labels: [
      "Computer Science",
      "Mathematics",
      "Physics",
      "Biology",
      "Chemistry",
      "Economics",
      "Law",
      "Engineering",
    ],
    datasets: [
      {
        label: "Students by Department",
        data: [320, 280, 210, 190, 160, 250, 230, 300],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#C9CBCF",
          "#2ECC71",
        ],
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
      <h3>Students by Department</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "350px",
        }}
      >
        <Doughnut data={departmentData} options={options} />
      </div>
    </div>
  );
};
