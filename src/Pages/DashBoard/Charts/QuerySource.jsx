import React from "react";
import ReactApexChart from "react-apexcharts";
const QuerySource = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: "pie",
      },

      legend: {
        position: "bottom",
        fontSize: "12px",
        fontWeight: 400,
      },
      title: {
        text: "QUERY SOURCE",
        align: "left",
        style: {
          fontSize: "18px",
        },
      },
      labels: [
        "EMAIL",
        "REFFERAL",
        "WHATSAPP",
        "TELEPHONE",
        "WEBSITE",
        "QUERY",
      ],

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
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
        height="800"
      />
    </div>
  );
};

export default QuerySource;
