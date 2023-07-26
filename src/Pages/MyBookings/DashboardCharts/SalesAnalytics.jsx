import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SalesAnalytics = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      height: 430,
    },
    title: {
      text: "Sales Analytics",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
  });

  const [series, setSeries] = useState([
    {
      name: "Hotel",
      data: [44, 55, 41, 64, 22],
    },
    {
      name: "Activity",
      data: [53, 32, 33, 52, 13],
    },
    {
      name: "Build Packages",
      data: [70, 50, 64, 57, 47],
    },
    {
      name: "Visa ",
      data: [29, 60, 12, 9, 13],
    },
  ]);

  return (
    <ReactApexChart options={options} series={series} type="bar" height={430} />
  );
};

export default SalesAnalytics;
