<template>
  <div>
    <div class="bar-chart-title">{{ title }}</div>
    <div class="bar-chart">
      <BarChart :chart-data="computedData" :options="options" />
    </div>
    <div class="figure-layout__label">{{ formatUnixTimestamp(labels[0]) }}</div>
  </div>
</template>

<script>
import BarChart from "~/components/js/BarChart.js";
import FormatMixin from "~/components/mixin/FormatMixin.js";

export default {
  components: {
    BarChart
  },
  mixins: [FormatMixin],
  props: ["title", "labels", "values", "unit"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
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
  computed: {
    computedData: function() {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: "#f87979",
            data: this.values
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss">
.bar-chart-title {
  font-size: 1em;
}

.bar-chart {
  display: inline-block;
  color: currentColor;
  text-decoration: none;
  max-width: 90%;
}
</style>
