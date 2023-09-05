import React from "react";
import ReactApexChart from "react-apexcharts";
const TopAgens = () => {
  const chartData = {
    series: [
      {
        data: [1200, 1150, 1050, 800, 700, 650, 550, 430, 350, 100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      title: {
        text: "TOP 10 AGENTS",
        align: "left",
        style: {
          fontSize: "18px",
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "DHIREM DMC",
          "DIAMOND TOURS",
          "DELPHIC HOLIDAYS",
          "VIVAN HOLIDAYS",
          "PARMAR TOURS",
          "WINDEX TOURS",
          "SHAKTI VACATION OPC",
          "RAVI SHINHA",
          "PADMAVATI TRAVEL",
          "RAYNA TOURS",
        ],
      },
    },
  };
  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
        height="300"
      />
    </div>
  );
};

export default TopAgens;
