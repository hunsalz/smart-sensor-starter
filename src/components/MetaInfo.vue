<template>
  <div class="meta-info">
    Last updated at {{ sensor.date }}
    <!--template v-if="sensor.timeToRead">
      <strong>{{ sensor.timeToRead }} min read.</strong>
    </template-->
  </div>
</template>

<script>
export default {
  props: ["sensor"]
};
</script>

<style lang="scss">
.meta-info {
  font-size: 0.8em;
  opacity: 0.8;
}
</style>