import React from "react";
import Chart from "react-apexcharts";
const TopSellingDestinatioons = () => {
  const chartData = {
    series: [
      {
        name: "Coverd",
        data: [44, 55, 41, 37, 22, 43, 21],
        color: "#3366ff",
      },
      {
        name: "Un Coverd",
        data: [53, 32, 33, 52, 13, 43, 32],
        color: "#ff5733",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            total: {
              enabled: true,
              offsetX: 0,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      title: {
        text: "TOP SELLING DESTINATIONS", // Set the title text here
        align: "left",
        style: {
          fontSize: "24px",
        },
      },
      xaxis: {
        categories: ["Dubai", "USA", "Australa", "AbuDhabi"],
        labels: {
          formatter: function (val) {
            //return val + "K";
            return val;
          },
        },
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            // return val + "K";
            return val;
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width="100%"
      />
    </div>
  );
};

export default TopSellingDestinatioons;
