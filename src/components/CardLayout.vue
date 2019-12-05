<template>
  <div class="card-layout content-box">
    
      <div class="card-layout__header">
        <g-image
          v-if="entry.cover_image"
          :src="entry.cover_image"
          alt="Cover image"
        />
      </div>
      <div class="card-layout__main">
        <h2 class="card-layout__title" v-html="entry.title" />
        <ChartLayout :entry="entry" />
        <TagList class="card-layout__tags" :entry="entry" />
      </div>
    
  </div>
</template>

<script>
import ChartLayout from "~/components/ChartLayout";
import TagList from "~/components/TagList";

export default {
  components: {
    ChartLayout,
    TagList
  },
  props: ["entry"]
};
</script>

<style lang="scss">
.card-layout {
  &__header {
    border-radius: var(--radius) var(--radius) 0 0;
    overflow: hidden;

    &:empty {
      display: none;
    }

    .g-image {
      min-width: 100%;
    }
  }

  &__main {
    margin: 1em;
    padding: 1em;
  }

  &__title {
    margin-top: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__link {
    text-decoration: none;
    color: currentColor;
    z-index: 0;
  }
}
</style>
