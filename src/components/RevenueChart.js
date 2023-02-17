import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5", "Jan 6", "Jan 7"];
const data = {
    labels: labels,
    datasets: [
      {
        label: "Current",
        backgroundColor: "#000",
        borderColor: "#000",
        pointStyle: false,
        data: [200, 300, 275, 290, 310, 175, 275],
      },
      {
        label: "Previous 7 days",        
        borderColor: "#0000ff",
        backgroundColor: "#0000ff",
        pointStyle: false,
        borderDash: [5, 5],
        data: [225, 280, 275, 230, 210, 275, 245],
      },
      {
        label: "Expenses",     
        backgroundColor: "#ff0000",
        borderColor: "#ff0000",
        pointStyle: false,
        data: [25, 30, 35, 30, 10, 35, 25],
      },
    ],
};

const RevenueChart = () => {
    return <div id="RevenueChart" className="card">
        <h2>Revenue</h2>
        <Line data={data} />
    </div>
}

export default RevenueChart;