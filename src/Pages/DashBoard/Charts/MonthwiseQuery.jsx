import React from "react";
import ReactApexChart from "react-apexcharts";
const MonthwiseQuery = () => {
  const chartData = {
    series: [
      {
        data: [44, 55, 41, 67, 22, 43, 55, 42],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: true,

        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false, // Remove the download option
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: "end", // 'around', 'end'
          borderRadiusWhenStacked: "last", // 'all', 'last'
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },

      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
      },
      title: {
        text: "MONTHLY QUERY DATA", // Set the title text here
        align: "left",
        style: {
          fontSize: "18px",
        },
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
      />
    </div>
  );
};

export default MonthwiseQuery;
