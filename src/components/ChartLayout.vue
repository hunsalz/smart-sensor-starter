<template>
  <div class="chart-layout">
    <div v-for="data in record.data" :key="data.title">
      <div v-if="data.labels.length === 0 || data.values.length === 0">
        <!-- RENDER NOTHING -->
      </div>
      <div class="chart-layout__container" v-if="data.type === 'Bar'">
        <BarChart
          :title="data.title"
          :labels="data.labels"
          :values="data.values"
          :unit="data.unit"
          :color="data.color"
        />
      </div>
      <div class="chart-layout__container" v-else-if="data.type === 'Line'">
        <LineChart
          :title="data.title"
          :labels="data.labels"
          :values="data.values"
          :unit="data.unit"
        />
      </div>
      <div class="chart-layout__container" v-else>
        <ValueChart
          :title="data.title"
          :label="data.labels[0]"
          :value="data.values[0]"
          :unit="data.unit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart";
import LineChart from "~/components/LineChart";
import ValueChart from "~/components/ValueChart";

export default {
  components: {
    BarChart,
    LineChart,
    ValueChart
  },
  props: {
    record: {
      type: Object,
      required: true
    }
  },
};
</script>

<style lang="scss">
.chart-layout {
  &__container {
    margin-top: 1em;
    color: currentColor;
    text-decoration: none;
    white-space: nowrap;
  }
}
</style>
