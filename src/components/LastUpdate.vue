<template>
  <div class="last-update">Last update: {{ format(datetime) }}</div>
</template>

<script>
export default {
  props: ["datetime"],
  methods: {
    format(datetime) {
      if (datetime) {
        return this.$moment(datetime).format("LTS - L");
      } else {
        return "n/a";
      }
    }
  }
};
</script>

<style lang="scss">
.last-update {
  color: currentColor;
  text-decoration: none;
  font-size: 0.6em;
}
</style>
