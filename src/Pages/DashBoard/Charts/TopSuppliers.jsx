import React from "react";
import ReactApexChart from "react-apexcharts";
const TopSuppliers = () => {
  const chartData = {
    series: [
      {

        data: [850, 700, 650, 550, 430, 350, 100, 75, 60, 50],

        color: "#FFA500",

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
        text: "TOP 10 SUPPLIERS",
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
          "THE TRAVANCORE HERITAGE",
          "VIBE RESORT DUBAI",
          "HOTEL GRAND HEIRDEY",
          "THE MONIKER RESORT",
          "TATSARAASA RESORT",
          "HOTEL AIRLINK CASTEL",
          "HOLIDAY VISTA LUXURY",
          "TRIPLINK THAILAND",
          "RESORT THE LOHIAS",
          "THE FERN RESIDENCY",
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

export default TopSuppliers;
