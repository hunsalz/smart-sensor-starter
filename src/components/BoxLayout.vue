<template>
  <div class="box-layout">
    <div v-for="data in entry.data" :key="data.title">
      <div class="box-layout__container" v-if="data.values.length > 1">
        <BarChart
          :title="data.title"
          :labels="data.labels"
          :values="data.values"
          :unit="data.unit"
        />
      </div>
      <div class="box-layout__container" v-else-if="data.values.length === 1">
        <FigureLayout
          :title="data.title"
          :label="data.labels[0]"
          :value="data.values[0]"
          :unit="data.unit"
        />
      </div>
      <div class="box-layout__container" v-else>
        <!-- RENDER NOTHING -->
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart.vue";
import FigureLayout from "~/components/FigureLayout";

export default {
  components: {
    BarChart,
    FigureLayout
  },
  props: ["entry"]
};
</script>

<style lang="scss">
.box-layout {
  margin: 1em 0 0;

  &__container {
    margin-right: 0.7em;
    padding: 0.5em;
    color: currentColor;
    text-decoration: none;
    color: currentColor !important;
    border-radius: var(--radius);
    white-space: nowrap;
  }
}
</style>
