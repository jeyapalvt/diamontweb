import React from "react";
import Chart from "react-apexcharts";
const TotalSalesExpense = () => {
  const chartData = {
    series: [
      {
        name: "Sales",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        color: "#ff5733",
      },
      {
        name: "Expance",
        data: [60, 59, 60, 30, 20, 10, 97, 48, 197],
        color: "#3366ff",
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      //   title: {
      //     text: "Total Sales & Expanse",
      //     align: "left",
      //   },
      title: {
        text: "TOTAL SALES & EXPANSE", // Set the title text here
        align: "left",
        style: {
          fontSize: "18px",
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
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
      chart: {
        toolbar: {
          show: false, // Remove the download option
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="100%"
      />
    </div>
  );
};

export default TotalSalesExpense;
