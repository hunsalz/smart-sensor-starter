<template>
  <Layout>
    <div class="sensor-title">
      <h1 class="sensor-title__text">{{ $page.sensor.title }}</h1>
      <MetaInfo :sensor="$page.sensor" />
    </div>
    <div class="sensor content-box">
      <div class="sensor__header">
        <g-image
          alt="Cover image"
          v-if="$page.sensor.cover_image"
          :src="$page.sensor.cover_image"
        />
      </div>
      <div class="sensor__content" v-html="$page.sensor.content" />
      <BoxLayout :sensor="$page.sensor" />
      <div class="sensor__footer">
        <TagList :sensor="$page.sensor" />
      </div>
    </div>
  </Layout>
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
  metaInfo() {
    return {
      title: this.$page.sensor.title,
      meta: [
        {
          name: "description",
          content: this.$page.sensor.content
        }
      ]
    };
  }
};
</script>

<page-query>
query Sensor ($id: ID!) {
  sensor: sensor (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    cover_image (width: 860, blur: 10)
    tags {
      id
      title
      path
    }
    data {
      title
      labels
      values
      unit
    }
    content
  }
}
</page-query>

<style lang="scss">
.sensor-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.sensor {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
</style>
