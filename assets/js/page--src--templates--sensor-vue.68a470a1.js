(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(s,t,e){},228:function(s,t,e){},230:function(s,t,e){"use strict";var n=e(227);e.n(n).a},231:function(s,t,e){"use strict";var n=e(228);e.n(n).a},232:function(s,t,e){"use strict";var n={props:["sensor"]},a=(e(230),e(16)),r=Object(a.a)(n,(function(){var s=this.$createElement;return(this._self._c||s)("div",{staticClass:"sensor-meta"},[this._v("\n  Last updated at "+this._s(this.sensor.date)+"\n  ")])}),[],!1,null,null,null);t.a=r.exports},233:function(s,t,e){"use strict";var n={props:["sensor"]},a=(e(231),e(16)),r=Object(a.a)(n,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"sensor-tags"},s._l(s.sensor.tags,(function(t){return e("g-link",{key:t.id,staticClass:"sensor-tags__link",attrs:{to:t.path}},[e("span",[s._v("#")]),s._v("\n    "+s._s(t.title)+"\n  ")])})),1)}),[],!1,null,null,null);t.a=r.exports},236:function(s,t,e){},237:function(s,t){},241:function(s,t,e){"use strict";var n=e(236);e.n(n).a},242:function(s,t,e){"use strict";var n=e(237),a=e.n(n);t.default=a.a},245:function(s,t,e){"use strict";e.r(t);var n=e(232),a=e(233),r={components:{SensorMeta:n.a,SensorTags:a.a},metaInfo:function(){return{title:this.$page.sensor.title,meta:[{name:"description",content:this.$page.sensor.description}]}}},i=(e(241),e(16)),o=e(242),c=Object(i.a)(r,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("Layout",[e("div",{staticClass:"sensor-title"},[e("h1",{staticClass:"sensor-title__text"},[s._v(s._s(s.$page.sensor.title))]),e("SensorMeta",{attrs:{sensor:s.$page.sensor}})],1),e("div",{staticClass:"sensor content-box"},[e("div",{staticClass:"sensor__header"},[s.$page.sensor.cover_image?e("g-image",{attrs:{alt:"Cover image",src:s.$page.sensor.cover_image}}):s._e()],1),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor__content",domProps:{innerHTML:s._s(s.$page.sensor.content)}}),e("div",{staticClass:"sensor__footer"},[e("SensorTags",{attrs:{sensor:s.$page.sensor}})],1)])])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(c);t.default=c.exports}}]);