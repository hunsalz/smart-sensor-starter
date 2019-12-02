<template>
  <div>
    <BarChart
      class="bar-chart"
      :title="title"
      :labels="labels"
      :values="values"
      :unit="unit"
    />
  </div>
</template>

<script>
import BarChart from "~/components/js/BarChart.js";

export default {
  components: {
    BarChart
  },
  props: ["title", "labels", "values", "unit"]
};
</script>

<style lang="scss">
.bar-chart {
  position: relative;
  color: currentColor;
  text-decoration: none;

  &__title {
    font-size: 0.8em;
  }

  &__value {
    font-size: 2em;
    font-weight: 600;
  }

  &__unit {
    font-size: 2em;
    font-weight: 600;
  }
}
</style>
