<template>
  <div class="box-layout">
    <div v-for="data in entry.data" :key="data.title">
      <div class="box-layout__container" v-if="data.labels.length === 0 || data.values.length === 0">
        <!-- RENDER NOTHING -->
      </div>
      <div class="box-layout__container" v-if="data.type === 'Bar'">
        <BarChart
          :title="data.title"
          :labels="data.labels"
          :values="data.values"
          :unit="data.unit"
        />
      </div>
      <div class="box-layout__container" v-else-if="data.type === 'Line'">
        <LineChart
          :title="data.title"
          :labels="data.labels"
          :values="data.values"
          :unit="data.unit"
        />
      </div>
      <div class="box-layout__container" v-else>
        <FigureLayout
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
import FigureLayout from "~/components/FigureLayout";
import LineChart from "~/components/LineChart";

export default {
  components: {
    BarChart,
    FigureLayout,
    LineChart
  },
  props: ["entry"]
};
</script>

<style lang="scss">
.box-layout {
  &__container {
    margin-top: 1em;
    color: currentColor;
    text-decoration: none;
    white-space: nowrap;
  }
}
</style>
