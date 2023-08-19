const VehicleOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
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
  },
};
export default VehicleOption;
