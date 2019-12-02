<template>
  <div class="bar-chart">
    <div class="bar-chart__title">{{ title }}</div>
    <div>
      <span class="bar-chart__value">{{ value }} </span>
      <span class="bar-chart__unit">{{ unit }}</span>
    </div>
    <div class="bar-chart__label">{{ formatUnixTimestamp(label) }}</div>
  </div>
</template>

<script>
import formatMixin from "~/components/mixin/FormatMixin.js";

export default {
  props: ["title", "label", "value", "unit"],
  mixins: [formatMixin]
};
</script>

<style lang="scss">
.bar-chart {
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
