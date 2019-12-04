<template>
  <div>
    <div class="bar-chart-title">{{ title }}</div>
    <div class="bar-chart">
      <BarChart :chart-data="computedData" :options="options" />
    </div>
    <LastUpdate :datetime="labels[0]" />
  </div>
</template>

<script>
import BarChart from "~/components/js/BarChart.js";
import LastUpdate from "~/components/LastUpdate";

export default {
  components: {
    BarChart,
    LastUpdate
  },
  props: ["title", "labels", "values", "unit", "color"],
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
      },
      tooltips: {
        callbacks: {
          // TODO format date time with correct locale
          // title: function(tooltipItems, data) {
          //   return formatDateTime(tooltipItems.label);
          // }
        }
      }
    }
  }),
  computed: {
    computedData: function() {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.color ? this.color : "#f87979",
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
