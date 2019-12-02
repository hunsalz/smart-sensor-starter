<template>
  <Layout>
    <div class="detail-title">
      <h1 class="detail-title__text">{{ $page.entry.title }}</h1>
    </div>
    <div class="detail content-box">
      <div class="detail__header">
        <g-image
          alt="Cover image"
          v-if="$page.entry.cover_image"
          :src="$page.entry.cover_image"
        />
      </div>
      <div class="detail__content" v-html="$page.entry.content" />
      <BoxLayout :entry="$page.entry" />
      <div class="detail__footer">
        <TagList :entry="$page.entry" />
      </div>
    </div>
  </Layout>
</template>

<script>
import BoxLayout from "~/components/BoxLayout";
import TagList from "~/components/TagList";

export default {
  components: {
    BoxLayout,
    TagList
  },
  metaInfo() {
    return {
      title: this.$page.entry.title,
      meta: [
        {
          name: "description",
          content: this.$page.entry.content
        }
      ]
    };
  }
};
</script>

<page-query>
query Entry ($id: ID!) {
  entry: entry (id: $id) {
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
.detail-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.detail {
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
