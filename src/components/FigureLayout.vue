<template>
  <div class="figure-layout">
    <div class="figure-layout__title">{{ title }}</div>
    <div>
      <span class="figure-layout__value">{{ value }} </span>
      <span class="figure-layout__unit">{{ unit }}</span>
    </div>
    <div class="figure-layout__label">{{ formatUnixTimestamp(label) }}</div>
  </div>
</template>

<script>
import FormatMixin from "~/components/mixin/FormatMixin.js";

export default {
  props: ["title", "label", "value", "unit"],
  mixins: [FormatMixin]
};
</script>

<style lang="scss">
.figure-layout {
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
