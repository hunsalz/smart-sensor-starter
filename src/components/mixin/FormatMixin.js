export default {
  methods: {
    formatDateTime(datetime) {
      return this.$moment(datetime).format("L / LTS");
    }
  }
};
