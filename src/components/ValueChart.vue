<template>
  <div class="value-layout">
    <div class="value-layout__title">{{ title }}</div>
    <div>
      <span class="value-layout__value">{{ value }} </span>
      <span class="value-layout__unit">{{ unit }}</span>
    </div>
    <LastUpdate :datetime="label" />
  </div>
</template>

<script>
import LastUpdate from "~/components/LastUpdate";

export default {
  components: {
    LastUpdate
  },
  props: ["title", "label", "value", "unit"]
};
</script>

<style lang="scss">
.value-layout {
  color: currentColor;
  text-decoration: none;

  &__title {
    font-size: 1em;
  }

  &__label {
    font-size: 0.6em;
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
