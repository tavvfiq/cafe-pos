import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";

const chartData = {
  labels: [],
  datasets: [
    {
      label: "This Month",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    },
  ],
};

const options = {
  plugins: {
    datalabels: {
      display: true,
      color: "#FFF",
      borderRadius: 10,
      align: "center",
      textAlign: "center",
      position: "bottom",
      font: {
        weight: "bold",
      },
    },
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Day'
        },
        ticks: {
          fontSize: 10,
        },
      },
    ],
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Amount (in K)'
        },
        ticks: {
          fontSize: 10,
        },
      },
    ],
  },
};

const RevenueChart = (props) => {
  const labels = props.data.map((item) => {
    return item.date;
  });
  const data = props.data.map((item) => {
    return item.amount;
  });
  chartData.labels = labels;
  chartData.datasets[0].data = data;
  return (
    <div className="chart">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default RevenueChart;
