import { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const revenueData = {
  2023: [
    { month: "January", revenue: 12000 },
    { month: "February", revenue: 15000 },
    { month: "March", revenue: 17000 },
    { month: "April", revenue: 14000 },
    { month: "May", revenue: 16000 },
    { month: "June", revenue: 18000 },
    { month: "July", revenue: 19000 },
    { month: "August", revenue: 21000 },
    { month: "September", revenue: 23000 },
    { month: "October", revenue: 20000 },
    { month: "November", revenue: 22000 },
    { month: "December", revenue: 25000 },
  ],
  2024: [
    { month: "January", revenue: 13000 },
    { month: "February", revenue: 15500 },
    { month: "March", revenue: 16500 },
    { month: "April", revenue: 15000 },
    { month: "May", revenue: 17000 },
    { month: "June", revenue: 18500 },
    { month: "July", revenue: 19500 },
    { month: "August", revenue: 22000 },
    { month: "September", revenue: 23500 },
    { month: "October", revenue: 21000 },
    { month: "November", revenue: 22500 },
    { month: "December", revenue: 26000 },
  ],
};

export const Revenue = () => {
  const chartRef = useRef();
  const [selectedYear, setSelectedYear] = useState("2024");

  const data = {
    labels: revenueData[selectedYear].map((item) => item.month),
    datasets: [
      {
        label: "Monthly Revenue (USD)",
        data: revenueData[selectedYear].map((item) => item.revenue),
        fill: true,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(116, 247, 144, 0.4)");
          gradient.addColorStop(1, "rgba(75,192,192,0.05)");
          return gradient;
        },
        borderColor: "rgba(21, 135, 36, 1)",
        tension: 0.3,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(21, 135, 36, 1)",
        pointRadius: 6,
        pointBorderWidth: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "College Monthly Revenue Overview",
      },
    },
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <h1>College Revenue Dashboard</h1>
      <label htmlFor="year-select">Select Year: </label>
      <select id="year-select" value={selectedYear} onChange={handleYearChange}>
        {Object.keys(revenueData).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <div>
        <Line ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};
