(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{227:function(t,s,e){},228:function(t,s,e){},229:function(t,s,e){},231:function(t,s,e){"use strict";var n=e(227);e.n(n).a},232:function(t,s,e){"use strict";var n=e(228);e.n(n).a},233:function(t,s,e){"use strict";var n=e(229);e.n(n).a},234:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(231),e(16)),r=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"meta-info"},[this._v("Last updated at "+this._s(this.sensor.date))])}),[],!1,null,null,null);s.a=r.exports},235:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(232),e(16)),r=Object(a.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sensor-values"})}),[],!1,null,null,null);s.a=r.exports},236:function(t,s,e){"use strict";var n={props:["sensor"]},a=(e(233),e(16)),r=Object(a.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tag-list"},t._l(t.sensor.tags,(function(s){return e("g-link",{key:s.id,staticClass:"tag-list__link",attrs:{to:s.path}},[e("span",[t._v("#")]),t._v("\n    "+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=r.exports},239:function(t,s,e){},240:function(t,s){},245:function(t,s,e){"use strict";var n=e(239);e.n(n).a},246:function(t,s,e){"use strict";var n=e(240),a=e.n(n);s.default=a.a},250:function(t,s,e){"use strict";e.r(s);var n=e(235),a=e(234),r=e(236),i={components:{SensorValues:n.a,MetaInfo:a.a,TagList:r.a},metaInfo:function(){return{title:this.$page.sensor.title,meta:[{name:"description",content:this.$page.sensor.content}]}}},o=(e(245),e(16)),c=e(246),l=Object(o.a)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Layout",[e("div",{staticClass:"sensor-title"},[e("h1",{staticClass:"sensor-title__text"},[t._v(t._s(t.$page.sensor.title))]),e("MetaInfo",{attrs:{sensor:t.$page.sensor}})],1),e("div",{staticClass:"sensor content-box"},[e("div",{staticClass:"sensor__header"},[t.$page.sensor.cover_image?e("g-image",{attrs:{alt:"Cover image",src:t.$page.sensor.cover_image}}):t._e()],1),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"sensor__content",domProps:{innerHTML:t._s(t.$page.sensor.content)}}),e("SensorValues",{staticClass:"sensor-card__meta",attrs:{sensor:t.$page.sensor}}),e("div",{staticClass:"sensor__footer"},[e("TagList",{attrs:{sensor:t.$page.sensor}})],1)],1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(l);s.default=l.exports}}]);