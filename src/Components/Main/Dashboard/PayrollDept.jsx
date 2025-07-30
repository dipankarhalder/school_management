import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const PayrollDept = () => {
  const payrollData = [
    { department: "CS", cost: 120000 },
    { department: "Math", cost: 95000 },
    { department: "Physics", cost: 87000 },
    { department: "Admin", cost: 98000 },
    { department: "IT", cost: 105000 },
    { department: "Chemistry", cost: 92000 },
    { department: "Biology", cost: 91000 },
    { department: "Library", cost: 55000 },
    { department: "Accounts", cost: 80000 },
    { department: "Sports", cost: 60000 },
    { department: "Humanities", cost: 89000 },
    { department: "Engineering", cost: 125000 },
    { department: "Art & Design", cost: 72000 },
    { department: "Law", cost: 86000 },
    { department: "Economics", cost: 91000 },
    { department: "Psychology", cost: 88000 },
    { department: "Sociology", cost: 87000 },
    { department: "Civil", cost: 93000 },
    { department: "ENVS", cost: 85000 },
    { department: "MS", cost: 115000 },
    { department: "Nursing", cost: 94000 },
    { department: "Philosophy", cost: 76000 },
    { department: "Education", cost: 90000 },
    { department: "Geography", cost: 88000 },
  ];

  const data = {
    labels: payrollData.map((item) => item.department),
    datasets: [
      {
        label: "Payroll Cost (₹)",
        data: payrollData.map((item) => item.cost),
        backgroundColor: "#0b57d0",
        borderColor: "#0b57d0",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            if (value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
          font: {
            family: "'AvenirNext', sans-serif",
            weight: 500,
          },
        },
      },
    },
  };

  return (
    <div className="app_dept_graph_full">
      <h3>Department Wise Payroll Cost</h3>
      <Bar data={data} options={options} />
    </div>
  );
};
