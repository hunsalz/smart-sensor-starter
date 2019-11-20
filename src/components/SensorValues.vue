<template>
  <div class="sensor-values">
    <g-link class="sensor-values__link" v-for="value in sensor.values" :key="value.id" :to="value.path">
      ff
      {{ value.title }}
    </g-link>
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

  &__link {
    margin-right: 0.7em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important; //Todo: remove important;
    padding: 0.5em;
    border-radius: var(--radius);
  }
}
</style>