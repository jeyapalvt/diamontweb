import React from "react";
import ReactApexChart from "react-apexcharts";
const QuerySource = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: "bottom", // Set the legend position to "bottom"
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default QuerySource;
