import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
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
      maintainAspectRatio: true,
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
