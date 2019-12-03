<template>
  <Layout :show-back-button="false">
    <div class="grid">
      <CardLayout
        v-for="edge in $page.entries.edges"
        :key="edge.node.id"
        :entry="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  entries: allEntry(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        path
        date (format: "D. MMMM YYYY")
        cover_image (width: 770, height: 380, blur: 10)
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
  }
}
</page-query>

<script>
import CardLayout from "~/components/CardLayout.vue";

export default {
  components: {
    CardLayout
  },
  metaInfo: {
    title: "Overview page",
    titleTemplate: "%s"
  }
};
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
