<template>
  <div class="sensor-values">

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
