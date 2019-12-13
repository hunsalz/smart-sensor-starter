<template>
  <div class="tag-filter">
    <button
      class="tag-filter__button"
      v-for="(tag, index) in tags"
      :key="index"
      @click="$emit('remove-tag', tag)"
    >
      <span>#</span>
      {{ tag }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>

<style lang="scss">
.tag-filter {
  margin: 1em 0 1em 0;

  &__button {
    margin-right: 0.7em;
    padding: 0.5em;
    font-size: 0.8em;
    color: currentColor;
    text-decoration: none;
    background-color: var(--bg-color);
    color: currentColor !important;
    border-radius: var(--radius);
    white-space: nowrap;
  }
}
</style>
