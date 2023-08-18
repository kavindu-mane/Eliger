const VehicleOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  scales: {
    y: {
      ticks: {
        color: "#0f172a",
        font: {
          weight: "bold",
          size: 14,
        },
      },
      title: {
        text: "Vehicle Type",
        display: true,
        color: "0f172a",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    x: {
      ticks: {
        color: "#0f172a",
        font: {
          weight: "bold",
          size: 14,
        },
      },
      title: {
        text: "Amount",
        display: true,
        color: "0f172a",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      color: "#0f172a",
      font: {
        size: 25,
        weight: "bold",
      },
      text: "Vehicle Type Vs Amount",
    },
  },
};
export default VehicleOption;
