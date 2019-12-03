import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    options: {
      type: Object,
      required: true
    },
    // width and height see https://github.com/apertureless/vue-chartjs/issues/503
    width: {
      value: null
    },
    height: {
      value: null
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
