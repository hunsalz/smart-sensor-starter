<template>
  <div
    class="sensor-card content-box"
    :class="{ 'sensor-card--has-sensorer': sensor.sensorer }"
  >
    <div class="sensor-card__header">
      <g-image
        alt="Cover image"
        v-if="sensor.cover_image"
        class="sensor-card__image"
        :src="sensor.cover_image"
      />
    </div>
    <div class="sensor-card__content">
      <h2 class="sensor-card__title" v-html="sensor.title" />
      <p class="sensor-card__content" v-html="sensor.content" />
      <p>
        <SensorValues class="sensor-card__meta" :sensor="sensor" />
      </p>

      <!-- <TagList class="sensor-card__tags" :sensor="sensor" />

      <div class="meta-info">Last updated at {{ sensor.date }}</div> -->

      <g-link class="sensor-card__link" :to="sensor.path">Link</g-link>
    </div>
  </div>
</template>

<script>
import MetaInfo from "~/components/MetaInfo";
import SensorValues from "~/components/SensorValues";
import TagList from "~/components/TagList";

export default {
  components: {
    MetaInfo,
    SensorValues,
    TagList
  },
  props: ["sensor"]
};
</script>

<style lang="scss">
.sensor-card {
  margin-bottom: var(--space);
  position: relative;

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

  /*   &:hover {
    transform: translateY(-5px);
    box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
  } */

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
