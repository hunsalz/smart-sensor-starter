<template>
  <Layout :show-back-button="false">
    <div class="grid">
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
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
        data {
          key
          value
          unit
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
    title: "Smart Sensor",
    titleTemplate: "%s"
  }
};
</script>

<style lang="scss">
.grid {
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>