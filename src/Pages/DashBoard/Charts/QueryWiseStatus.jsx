import React from "react";

import ReactApexChart from "react-apexcharts";
const QueryWiseStatus = () => {
  const chartData = {
    series: [
      {
        name: "Funnel Series",
        data: [1380, 1100, 990, 600, 350],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false, // Remove the download option
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          barHeight: "80%",
          isFunnel: true,
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
        },
        dropShadow: {
          enabled: true,
        },
      },
      title: {
        text: "QUERY WISE STATUS",
        align: "left",
        style: {
          fontSize: "18px",
        },
      },
      xaxis: {
        categories: ["CONFIRM", "PENDING", "FALLOWUP'S", "CANCEL", "LOST"],
      },
      legend: {
        show: false,
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

export default QueryWiseStatus;
