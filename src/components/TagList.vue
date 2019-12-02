<template>
  <div class="tag-list">
    <g-link
      class="tag-list__link"
      v-for="tag in entry.tags"
      :key="tag.id"
      :to="tag.path"
    >
      <span>#</span>
      {{ tag.title }}
    </g-link>
  </div>
</template>

<script>
export default {
  props: ["entry"]
};
</script>

<style lang="scss">
.tag-list {
  margin: 1em 0 0;

  &__link {
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
