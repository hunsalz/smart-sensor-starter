<template>
  <div class="card-layout content-box">
    <div class="card-layout__header">
      <g-image
        class="card-layout__image"
        v-if="entry.cover_image"
        :src="entry.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__main">
      <h2 class="card-layout__title" v-html="entry.title" />
      <BoxLayout :entry="entry" />
      <TagList class="card-layout__tags" :entry="entry" />
      <g-link class="card-layout__link" :to="entry.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import BoxLayout from "~/components/BoxLayout";
import TagList from "~/components/TagList";

export default {
  components: {
    BoxLayout,
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
  }

  &__image {
    min-width: 100%;
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    text-indent: -9999px;
    z-index: 0;
  }
}
</style>
