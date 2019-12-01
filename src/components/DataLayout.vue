<template>
  <div class="data-layout">
    <div class="data-layout__label">{{ data.label }}</div>
    <div>
      <span class="data-layout__value">{{ data.value }} </span>
      <span class="data-layout__unit">{{ data.unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss">
.data-layout {
  color: currentColor;
  text-decoration: none;

  &__label {
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
