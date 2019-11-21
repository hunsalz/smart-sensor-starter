<template>
  <Layout :show-back-button="false">
    <div class="sensors">
      <SensorCard v-for="edge in $page.sensors.edges" :key="edge.node.id" :sensor="edge.node" />
    </div>
  </Layout>
</template>

<page-query>
query {
  sensors: allSensor(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
        values {
          id
          title
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
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>
