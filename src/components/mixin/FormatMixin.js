export default {
  methods: {
    formatUnixTimestamp(unixTimestamp) {
      let timestamp = this.$moment.unix(unixTimestamp);
      return this.$moment(timestamp).format("L / LTS");
    }
  }
};
