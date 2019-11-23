<template>
  <div class="sensor-values">
    <div class="sensor-values__data" v-for="data in sensor.data" :key="data.key">
      <span>{{ data.key }} / {{ data.value }} {{ data.unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sensor"]
};
</script>

<style lang="scss">
.sensor-values {
  margin: 1em 0 0;

  &__data {
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
  }
}
</style>