import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";

import moment from "moment";

export default function(Vue, { router, head, isClient }) {
  // set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  // set Moment.Js globally available
  moment.locale("de");
  Vue.prototype.$moment = moment;
}
