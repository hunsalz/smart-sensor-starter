<template>
  <Layout :show-back-button="false">
    <TagFilter :tags="tags" v-on:remove-tag="onRemoveTag" />
    <div class="grid">
      <div v-for="edge in computedCards" :key="edge.node.id">
        <CardLayout :entry="edge.node" v-on:add-tag="onAddTag" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  entries: allEntry(filter: { visible: { eq: true }}, sortBy: "title", order: ASC,) {
    edges {
      node {
        id
        title
        path
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
          type
          color
        }
        content
      }
    }
  }
}
</page-query>

<script>
import CardLayout from "~/components/CardLayout.vue";
import TagFilter from "~/components/TagFilter.vue";

export default {
  components: {
    CardLayout,
    TagFilter
  },
  data: function() {
    return {
      tags: []
    };
  },
  metaInfo: {
    title: "Overview page",
    titleTemplate: "%s"
  },
  computed: {
    computedCards: function() {
      let edges = this.$page.entries.edges;
      // filter matching cards
      let result = edges.filter(
        edge =>
          // compose intersection between tags per node and given filter array.
          // for that reason map tag.titles into a temporary array
          _.intersection(_.map(edge.node.tags, "title"), this.tags).length ===
          // force exact match of all filtered tag elements
          this.tags.length
      );

      //console.log("Result: ", result);

      return result;
    }
  },
  methods: {
    // TODO explain
    onAddTag: function(tag) {
      //console.log("add", tag);
      this.tags = _.union(this.tags, [tag]);
    },
    // TODO explain
    onRemoveTag: function(tag) {
      //console.log("remove", tag);
      this.tags = _.without(this.tags, tag);
    }
  },
  created() {
    this.$eventBus.$on("addTag", this.onAddTag);
  },
  beforeDestroy() {
    this.$eventBus.$off("addTag");
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
