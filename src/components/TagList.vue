<template>
  <div class="tag-list">
    <button
      class="tag-list__button"
      v-for="(tag, index) in tags"
      :key="index"
      @click="emitAddTag(tag.title)"
    >
      <span>#</span>
      {{ tag.title }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  },
  methods: {
    emitAddTag(tag) {
      this.$eventBus.$emit("addTag", tag);
    }
  }
};
</script>

<style lang="scss">
.tag-list {
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
