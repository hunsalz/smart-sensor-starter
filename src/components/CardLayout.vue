<template>
  <div class="card-layout content-box">
    <div class="card-layout__header">
      <g-image
        class="card-layout__image"
        v-if="sensor.cover_image"
        :src="sensor.cover_image"
        alt="Cover image"
      />
    </div>
    <div class="card-layout__content">
      <h2 class="card-layout__title" v-html="sensor.title" />
      <BoxLayout :sensor="sensor" />
      <MetaInfo class="card-layout__meta" :sensor="sensor" />
      <TagList class="card-layout__tags" :sensor="sensor" />
      <g-link class="card-layout__link" :to="sensor.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import BoxLayout from "~/components/BoxLayout";
import MetaInfo from "~/components/MetaInfo";
import TagList from "~/components/TagList";

export default {
  components: {
    BoxLayout,
    MetaInfo,
    TagList
  },
  props: ["sensor"]
};
</script>

<style lang="scss">
.card-layout {
  margin-bottom: var(--space);
  position: relative;

  // TODO remove?
  /*   &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  } */

  &__header {
    margin-left: calc(var(--space) * -1);
    margin-right: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    margin-top: calc(var(--space) * -1);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    &:empty {
      display: none;
    }
  }

  &__image {
    min-width: 100%;
  }

  &__title {
    margin-top: 0;
  }

  &__tags {
    z-index: 1;
    position: relative;
  }

  &__meta {
    padding-top: 1em;
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
