const colors = { heading: "#00BD56", lable: "#CBB279" };
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    colors.heading = "#f00"
}
const AccountOption = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      color: colors.heading,
      font: {
        size: 16,
        weight: "bold",
      },

      text: "Acount Type Vs Amount",
    },
    lable:{
        color: colors.lable
    }
  },
};
export default AccountOption;
