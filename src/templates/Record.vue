<template>
  <Layout :show-back-link="true" :toggle-view="false">
    <div class="content-box">
      <h1 class="record__header">{{ $page.record.title }}</h1>
      <div class="record__content">
        <g-image
          v-if="$page.record.cover_image"
          :src="$page.record.cover_image"
          alt="Cover image"
        />
        <ChartLayout :record="$page.record" />
      </div>
    </div>
  </Layout>
</template>

<script>
import ChartLayout from "~/components/ChartLayout";

export default {
  components: {
    ChartLayout
  },
  metaInfo() {
    return {
      title: this.$page.record.title,
      meta: [
        {
          name: "description",
          content: this.$page.record.title
        }
      ]
    };
  }
};
</script>

<page-query>
query Record ($id: ID!) {
  record: record (id: $id) {
    title
    path
    cover_image (width: 860, blur: 10)
    tags
    data {
      title
      labels
      values
      unit
      type
    }
    content
  }
}
</page-query>

<style lang="scss">
.record {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__header {
    padding: calc(var(--space) / 2) 0 calc(var(--space) / 2) 0;
    text-align: center;
  }

  &__content {
    margin: 0 1em 1em 1em;
    padding: 0 1em 1em 1em;

    &:empty {
      display: none;
    }

    .g-image {
      padding: 0;
      min-width: 100%;
    }
  }
}
</style>
