import React from "react";
import ReactApexChart from "react-apexcharts";
const TopSuppliers = () => {
  const chartData = {
    series: [
      {
        data: [900, 850, 777, 666, 550, 490, 320, 280, 200, 110],
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
          "THE TRADITIONAL HERITAGE",
          "VIBE RESORT DUBAI",
          "HOTEL GRAND HERIDEY",
          "THE MONIKER RESORT",
          "HOTEL AIRLINK",
          "HOLIDAY VISTA",
          "TRIPLINK THAILAND",
          "RESORT THE LOHIAS",
          "THE PERN RESIDENCY",
          "HOTEL PARK VIEW",
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
