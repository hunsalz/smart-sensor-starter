import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import moment from "moment";

export default function(Vue, { router, head, isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set Moment.js globally available
  moment.locale("de"); // TODO make configurable
  Vue.prototype.$moment = moment;
}
