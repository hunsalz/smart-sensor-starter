import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["width", "height"], // see https://github.com/apertureless/vue-chartjs/issues/503
  data: () => ({
    chartdata: {
      labels: ["1", "2", "3", "4"],
      datasets: [
        {
          backgroundColor: "#f87979",
          data: [40, 20, 30, 50]
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              display: false,
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
