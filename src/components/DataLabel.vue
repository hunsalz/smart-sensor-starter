<template>
  <div class="data-label">
    <div class="data-label__key">{{ data.key }}</div>
    <div class="data-label__value">{{ data.value }} {{ data.unit }}</div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss">
.data-label {
  &__key {
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
  }

  &__value {
    font-size: 2em;
    color: currentColor;
    text-decoration: none;
  }
}
</style>
