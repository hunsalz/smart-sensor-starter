<template>
  <div class="card-layout">
    <div class="card-layout__header">
      <g-image
        class="card-layout__image"
        v-if="entry.cover_image"
        :src="entry.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__content">
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
  margin: 1em;
  background-color: var(--bg-content-color);
  max-width: var(--content-width);
  border-radius: var(--radius);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02), 1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  transition: transform 0.3s, background-color 0.3s, box-shadow 0.6s;
  transition: background-color 0.6s;

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

  &__content {
    margin: 1em;
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
