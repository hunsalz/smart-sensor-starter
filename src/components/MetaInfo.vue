<template>
  <div class="meta-info">Last updated at {{ sensor.date }}</div>
</template>

<script>
export default {
  props: ["sensor"]
};
</script>

<style lang="scss">
.meta-info {
  font-size: 0.8em;
  opacity: 0.4;
}
</style>
