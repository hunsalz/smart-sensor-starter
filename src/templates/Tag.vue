<template>
  <Layout>
    <h1 class="tag-title text-center space-bottom">
      # {{ $page.tag.title }}
    </h1>

    <div class="sensors">
      <SensorCard v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id" :sensor="edge.node"/>
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
            description
            content
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import SensorCard from '~/components/SensorCard.vue'

export default {
  components: {
    Author,
    SensorCard
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="scss">

</style>

