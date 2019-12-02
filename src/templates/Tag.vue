<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>
    <CardLayout
      v-for="edge in $page.tag.belongsTo.edges"
      :key="edge.node.id"
      :entry="edge.node"
    />
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Entry {
            title
            path
            date (format: "D. MMMM YYYY")
            content
          }
        }
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
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  }
};
</script>

<style lang="scss"></style>
