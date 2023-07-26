import React, { useEffect, useRef } from "react";
import Chart from "react-apexcharts";
const BookingStatus = () => {
  var chartOptions = {
    series: [63, 15, 80, 260],
    labels: ["Confirmed", "Cancelled", "Voucher", "Completed"],
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: "Top 5 Agent Sales",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <Chart
      options={chartOptions}
      series={chartOptions.series}
      type={chartOptions.chart.type}
      width="100%"
    />
  );
};

export default BookingStatus;
