import React from "react";
import ReactApexChart from "react-apexcharts";
const TopAgens = () => {
  const chartData = {
    series: [
      {
        data: [1200, 1050, 1000, 800, 650, 450, 400, 350, 250, 150],
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
          "DHIREN DMC",
          "DIAMOND TOURS",
          "DELPHIC HOLIDAYS",
          "VIVAN HOLIDAYS",
          "PARMAR TOURS",
          "WINDEX TOURS",
          "SHAKTI VACATION",
          "RAVI SHINHA",
          "PADMAVATI TAVELS",
          "ORANGE TOURS",
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
