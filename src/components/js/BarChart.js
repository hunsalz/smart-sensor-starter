import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: ["title", "labels", "values", "unit", "width", "height"], // for width and height see https://github.com/apertureless/vue-chartjs/issues/503
  data: () => ({
    chartdata: {
      labels: [],
      datasets: [
        {
          backgroundColor: "#f87979",
          data: []
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
    this.chartdata.labels = this.labels;
    this.chartdata.datasets[0].data = this.values;
    this.renderChart(this.chartdata, this.options);
  }
};
