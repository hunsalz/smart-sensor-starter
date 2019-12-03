<template>
  <div>
    <div class="line-chart-title">{{ title }}</div>
    <div class="line-chart">
      <LineChart :chart-data="computedData" :options="options" />
    </div>
    <LastUpdate :datetime="labels[0]" />
  </div>
</template>

<script>
import LineChart from "~/components/js/LineChart.js";
import LastUpdate from "~/components/LastUpdate";

export default {
  components: {
    LineChart,
    LastUpdate
  },
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
  methods: {
    foo: function() {
      return "foo";
    }
  },
  computed: {
    computedData: function() {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: "#f87979", // TODO use var(--chart-bg)
            data: this.values
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss">
.line-chart-title {
  font-size: 1em;
}

.line-chart {
  display: inline-block;
  color: currentColor;
  text-decoration: none;
  max-width: 90%;
}
</style>
