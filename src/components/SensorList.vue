<template>
  <div class="sensor-list">
    <div v-for="data in sensor.data" :key="data.key">
      <DataLayout class="sensor-list__label" :data="data" />
    </div>
  </div>
</template>

<script>
import DataLayout from "~/components/DataLayout";

export default {
  components: {
    DataLayout
  },
  props: ["sensor"]
};
</script>

<style lang="scss">
.sensor-list {
  margin: 1em 0 0;

  &__label {
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
