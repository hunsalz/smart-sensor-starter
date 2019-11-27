<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom"># {{ $page.tag.title }}</h1>

    <div class="sensors">
      <SensorCard
        v-for="edge in $page.tag.belongsTo.edges"
        :key="edge.node.id"
        :sensor="edge.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Sensor {
            title
            path
            date (format: "D. MMMM YYYY")
            timeToRead
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SensorCard from "~/components/SensorCard.vue";

export default {
  components: {
    SensorCard
  },
  metaInfo() {
    return {
      title: this.$page.tag.title
    };
  }
};
</script>

<style lang="scss"></style>
