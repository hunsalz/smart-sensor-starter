<template>
  <div class="meta-info">Last updated at {{ entry.date }}</div>
</template>

<script>
export default {
  props: ["entry"]
};
</script>

<style lang="scss">
.meta-info {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>
